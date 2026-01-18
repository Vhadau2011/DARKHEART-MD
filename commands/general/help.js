module.exports = {
    name: 'help',
    description: 'Alias for menu',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the help command in the general category. (Placeholder)' });
    }
};