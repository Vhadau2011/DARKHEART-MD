module.exports = {
    name: 'fact',
    description: 'Get a random interesting fact',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fact command in the Fun category. (Placeholder)' });
    }
};