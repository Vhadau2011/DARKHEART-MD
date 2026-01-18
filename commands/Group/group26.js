module.exports = {
    name: 'group26',
    description: 'Functional Group command: group26',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Group command group26 executed.' });
    }
};