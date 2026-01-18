module.exports = {
    name: 'mods2',
    description: 'Functional MODS command: mods2',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'MODS command mods2 executed.' });
    }
};