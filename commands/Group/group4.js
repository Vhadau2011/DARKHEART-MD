module.exports = {
    name: 'group4',
    description: 'Functional Group command: group4',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Group command group4 executed.' });
    }
};