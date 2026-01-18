module.exports = {
    name: 'group23',
    description: 'Functional Group command: group23',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Group command group23 executed.' });
    }
};