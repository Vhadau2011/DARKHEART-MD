module.exports = {
    name: 'group2',
    description: 'Functional Group command: group2',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Group command group2 executed.' });
    }
};