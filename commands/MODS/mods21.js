module.exports = {
    name: 'mods21',
    description: 'Functional MODS command: mods21',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'MODS command mods21 executed.' });
    }
};