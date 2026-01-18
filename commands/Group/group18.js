module.exports = {
    name: 'group18',
    description: 'Functional Group command: group18',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Group command group18 executed.' });
    }
};