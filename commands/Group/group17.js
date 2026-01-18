module.exports = {
    name: 'group17',
    description: 'Functional Group command: group17',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Group command group17 executed.' });
    }
};