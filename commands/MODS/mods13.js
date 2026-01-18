module.exports = {
    name: 'mods13',
    description: 'Functional MODS command: mods13',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'MODS command mods13 executed.' });
    }
};