module.exports = {
    name: 'group8',
    description: 'Group command number 8',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group8 command in the Group category.' });
    }
};