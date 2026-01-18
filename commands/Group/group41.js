module.exports = {
    name: 'group41',
    description: 'Functional Group command: group41',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Group command group41 executed.' });
    }
};