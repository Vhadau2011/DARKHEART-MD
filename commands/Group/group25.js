module.exports = {
    name: 'group25',
    description: 'Functional Group command: group25',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Group command group25 executed.' });
    }
};