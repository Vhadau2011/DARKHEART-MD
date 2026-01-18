module.exports = {
    name: 'group15',
    description: 'Functional Group command: group15',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Group command group15 executed.' });
    }
};