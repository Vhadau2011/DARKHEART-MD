module.exports = {
    name: 'group14',
    description: 'Functional Group command: group14',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Group command group14 executed.' });
    }
};