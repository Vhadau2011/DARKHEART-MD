module.exports = {
    name: 'google',
    description: 'Search google',
    category: 'Users',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the google command in the Users category. (Placeholder)' });
    }
};