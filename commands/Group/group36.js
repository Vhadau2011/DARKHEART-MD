module.exports = {
    name: 'group36',
    description: 'Functional Group command: group36',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Group command group36 executed.' });
    }
};