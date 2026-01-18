module.exports = {
    name: 'group38',
    description: 'Functional Group command: group38',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Group command group38 executed.' });
    }
};