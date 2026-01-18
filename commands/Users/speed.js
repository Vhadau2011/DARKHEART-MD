module.exports = {
    name: 'speed',
    description: 'Check bot speed',
    category: 'Users',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the speed command in the Users category. (Placeholder)' });
    }
};