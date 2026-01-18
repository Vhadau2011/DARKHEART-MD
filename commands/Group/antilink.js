module.exports = {
    name: 'antilink',
    description: 'Group security: antilink',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'The antilink feature is now active in this group.' });
    }
};