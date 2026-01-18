module.exports = {
    name: 'mods8',
    description: 'Functional MODS command: mods8',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'MODS command mods8 executed.' });
    }
};