module.exports = {
    name: 'owner',
    description: 'Get owner contact info',
    category: 'Users',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the owner command in the Users category. (Placeholder)' });
    }
};