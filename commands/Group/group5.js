module.exports = {
    name: 'group5',
    description: 'Functional Group command: group5',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Group command group5 executed.' });
    }
};