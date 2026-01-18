module.exports = {
    name: 'mods36',
    description: 'Functional MODS command: mods36',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'MODS command mods36 executed.' });
    }
};