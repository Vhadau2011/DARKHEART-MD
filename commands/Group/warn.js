module.exports = {
    name: 'warn',
    description: 'Group security: warn',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'The warn feature is now active in this group.' });
    }
};