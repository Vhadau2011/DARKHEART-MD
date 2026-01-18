module.exports = {
    name: 'group27',
    description: 'Functional Group command: group27',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Group command group27 executed.' });
    }
};