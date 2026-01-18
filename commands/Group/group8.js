module.exports = {
    name: 'group8',
    description: 'Functional Group command: group8',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Group command group8 executed.' });
    }
};