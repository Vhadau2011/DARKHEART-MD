module.exports = {
    name: 'group13',
    description: 'Functional Group command: group13',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Group command group13 executed.' });
    }
};