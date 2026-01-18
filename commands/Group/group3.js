module.exports = {
    name: 'group3',
    description: 'Functional Group command: group3',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Group command group3 executed.' });
    }
};