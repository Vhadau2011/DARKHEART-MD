module.exports = {
    name: 'group4',
    description: 'Group command number 4',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group4 command in the Group category.' });
    }
};