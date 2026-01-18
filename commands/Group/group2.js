module.exports = {
    name: 'group2',
    description: 'Group command number 2',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group2 command in the Group category.' });
    }
};