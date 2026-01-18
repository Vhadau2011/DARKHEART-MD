module.exports = {
    name: 'group27',
    description: 'Group command number 27',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group27 command in the Group category.' });
    }
};