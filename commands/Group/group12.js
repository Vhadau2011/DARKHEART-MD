module.exports = {
    name: 'group12',
    description: 'Functional Group command: group12',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Group command group12 executed.' });
    }
};