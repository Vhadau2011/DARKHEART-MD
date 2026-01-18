module.exports = {
    name: 'meme',
    description: 'Get a random meme',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the meme command in the Fun category. (Placeholder)' });
    }
};