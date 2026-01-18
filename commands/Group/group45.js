module.exports = {
    name: 'group45',
    description: 'Group command number 45',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group45 command in the Group category.' });
    }
};