module.exports = {
    name: 'repo',
    description: 'Get bot repository link',
    category: 'Users',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the repo command in the Users category. (Placeholder)' });
    }
};