module.exports = {
    name: 'group46',
    description: 'Functional Group command: group46',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Group command group46 executed.' });
    }
};