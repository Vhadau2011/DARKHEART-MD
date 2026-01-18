module.exports = {
    name: 'sc',
    description: 'Get bot source code',
    category: 'Users',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the sc command in the Users category. (Placeholder)' });
    }
};