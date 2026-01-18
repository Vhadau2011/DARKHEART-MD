module.exports = {
    name: 'group1',
    description: 'Functional Group command: group1',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Group command group1 executed.' });
    }
};