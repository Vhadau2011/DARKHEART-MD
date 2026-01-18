module.exports = {
    name: 'wiki',
    description: 'Search wiki',
    category: 'Users',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the wiki command in the Users category. (Placeholder)' });
    }
};