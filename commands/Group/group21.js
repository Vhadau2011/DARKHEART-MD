module.exports = {
    name: 'group21',
    description: 'Group command number 21',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group21 command in the Group category.' });
    }
};