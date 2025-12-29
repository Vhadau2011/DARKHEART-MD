require("dotenv").config()

const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys")
const Pino = require("pino")
const fs = require("fs")

require("./core/REPO_RULES")
require("./core/BACKUP")

// Load mute system
const muteCommand = require("./commands/mute")

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState("session")

    const sock = makeWASocket({
        auth: state,
        logger: Pino({ level: "silent" }),
        printQRInTerminal: true
    })

    sock.ev.on("creds.update", saveCreds)

    sock.ev.on("messages.upsert", async ({ messages }) => {
        const msg = messages[0]
        if (!msg.message || msg.key.fromMe) return

        // 1️⃣ Check muted users and delete their messages
        if (muteCommand.checkMessage) await muteCommand.checkMessage(sock, msg)

        // 2️⃣ Extract text
        const text =
            msg.message.conversation ||
            msg.message.extendedTextMessage?.text ||
            ""

        // Ignore if no prefix
        if (!text.startsWith(process.env.PREFIX)) return

        // 3️⃣ Handle menu command
        if (text === `${process.env.PREFIX}menu`) {
            require("./commands/-")(sock, msg)
        }

        // 4️⃣ Pass to your main command handler
        const commandHandler = require("./handler/commandHandler")
        await commandHandler(sock, msg)
    })
}

startBot()
