module.exports = {
    name: 'group31',
    description: 'Group command number 31',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group31 command in the Group category.' });
    }
};