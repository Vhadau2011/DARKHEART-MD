module.exports = {
    name: 'group33',
    description: 'Functional Group command: group33',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Group command group33 executed.' });
    }
};