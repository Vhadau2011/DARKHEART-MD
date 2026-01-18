require('dotenv').config();
const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    jidDecode,
    makeInMemoryStore // Correctly importing the store function
} = require('@whiskeysockets/baileys');

const { Boom } = require('@hapi/boom');
const P = require('pino');
const fs = require('fs');
const path = require('path');
const qrcode = require('qrcode-terminal');

// Configuration from .env
const prefix = process.env.PREFIX || '!';
const ownerNumber = process.env.OWNER_NUMBER + '@s.whatsapp.net';
const mods = (process.env.MODS || '').split(',').map(v => v.trim() + '@s.whatsapp.net');
const botName = process.env.BOT_NAME || 'BLUEBOT-MD';

// Store for managing data in memory - Fixed the initialization
const store = makeInMemoryStore({ 
    logger: P().child({ level: 'silent', stream: 'store' }) 
});

// Command Handler Setup
const commands = new Map();

function loadCommands() {
    const categories = ['Owner', 'Admin', 'Dev', 'Fun', 'Group', 'MODS', 'general'];
    categories.forEach(category => {
        const commandPath = path.join(__dirname, 'commands', category);
        if (fs.existsSync(commandPath)) {
            const files = fs.readdirSync(commandPath).filter(file => file.endsWith('.js'));
            for (const file of files) {
                try {
                    const command = require(path.join(commandPath, file));
                    commands.set(command.name, command);
                } catch (e) {
                    console.error(`Failed to load command ${file}:`, e.message);
                }
            }
        }
    });
    console.log(`Loaded ${commands.size} commands.`);
}

async function startBot() {
    const sessionName = process.env.SESSION_ID || 'default-session';
    const sessionPath = path.join(__dirname, 'sessions', sessionName);
    
    // Ensure sessions directory exists
    if (!fs.existsSync(sessionPath)) {
        fs.mkdirSync(sessionPath, { recursive: true });
    }

    const { state, saveCreds } = await useMultiFileAuthState(sessionPath);
    const { version } = await fetchLatestBaileysVersion();

    const sock = makeWASocket({
        version,
        logger: P({ level: 'silent' }),
        printQRInTerminal: true,
        auth: state,
        browser: [botName, 'Chrome', '1.0.0']
    });

    // Bind the store to the socket events
    if (store && typeof store.bind === 'function') {
        store.bind(sock.ev);
    }

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect, qr } = update;
        if (qr) {
            console.log('Scan the QR code below to connect:');
        }
        if (connection === 'close') {
            const shouldReconnect = (lastDisconnect.error instanceof Boom)?.output?.statusCode !== DisconnectReason.loggedOut;
            console.log('Connection closed due to ', lastDisconnect.error?.message || 'unknown error', ', reconnecting ', shouldReconnect);
            if (shouldReconnect) startBot();
        } else if (connection === 'open') {
            console.log(`${botName} is now online!`);
        }
    });

    sock.ev.on('messages.upsert', async (m) => {
        if (m.type !== 'notify') return;
        const msg = m.messages[0];
        if (!msg.message || msg.key.fromMe) return;

        const from = msg.key.remoteJid;
        const type = Object.keys(msg.message)[0];
        const content = type === 'conversation' ? msg.message.conversation : 
                        type === 'extendedTextMessage' ? msg.message.extendedTextMessage.text : 
                        type === 'imageMessage' ? msg.message.imageMessage.caption : 
                        type === 'videoMessage' ? msg.message.videoMessage.caption : '';

        if (!content.startsWith(prefix)) return;

        const args = content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = commands.get(commandName);

        if (!command) return;

        const isOwner = from === ownerNumber || msg.key.participant === ownerNumber;
        const isMod = mods.includes(from) || mods.includes(msg.key.participant) || isOwner;
        const isDev = msg.key.participant?.includes('mudau_t') || from.includes('mudau_t');

        if (command.category === 'Owner' && !isOwner) return sock.sendMessage(from, { text: 'This command is for Owner only.' });
        if (command.category === 'MODS' && !isMod) return sock.sendMessage(from, { text: 'This command is for Mods/Owner only.' });
        if (command.category === 'Dev' && !isDev) return sock.sendMessage(from, { text: 'This command is for Developers only.' });

        try {
            await command.execute(sock, msg, args, { isOwner, isMod, isDev, prefix, store });
        } catch (error) {
            console.error(error);
            sock.sendMessage(from, { text: 'An error occurred while executing the command.' });
        }
    });
}

loadCommands();
startBot();
 
