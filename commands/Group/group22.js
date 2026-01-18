module.exports = {
    name: 'group22',
    description: 'Group command number 22',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group22 command in the Group category.' });
    }
};