module.exports = {
    name: 'group13',
    description: 'Group command number 13',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group13 command in the Group category.' });
    }
};