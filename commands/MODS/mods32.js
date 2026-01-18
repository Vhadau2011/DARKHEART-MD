module.exports = {
    name: 'mods32',
    description: 'MODS command number 32',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the mods32 command in the MODS category.' });
    }
};