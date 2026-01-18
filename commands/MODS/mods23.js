module.exports = {
    name: 'mods23',
    description: 'Functional MODS command: mods23',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'MODS command mods23 executed.' });
    }
};