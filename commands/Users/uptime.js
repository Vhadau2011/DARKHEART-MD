module.exports = {
    name: 'uptime',
    description: 'Check how long the bot has been running',
    category: 'Users',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the uptime command in the Users category. (Placeholder)' });
    }
};