module.exports = {
    name: 'mods3',
    description: 'Functional MODS command: mods3',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'MODS command mods3 executed.' });
    }
};