module.exports = {
    name: 'report',
    description: 'Report a bug to the owner',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the report command in the general category. (Placeholder)' });
    }
};