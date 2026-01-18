module.exports = {
    name: 'antibot',
    description: 'Group security: antibot',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'The antibot feature is now active in this group.' });
    }
};