module.exports = {
    name: 'mods5',
    description: 'Functional MODS command: mods5',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'MODS command mods5 executed.' });
    }
};