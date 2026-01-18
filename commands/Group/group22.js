module.exports = {
    name: 'group22',
    description: 'Functional Group command: group22',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Group command group22 executed.' });
    }
};