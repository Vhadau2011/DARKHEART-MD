module.exports = {
    name: 'mods6',
    description: 'Functional MODS command: mods6',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'MODS command mods6 executed.' });
    }
};