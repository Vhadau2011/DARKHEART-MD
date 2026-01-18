module.exports = {
    name: 'link',
    description: 'Get group invite link',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the link command in the Group category. (Placeholder)' });
    }
};