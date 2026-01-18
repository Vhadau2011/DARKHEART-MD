module.exports = {
    name: 'group25',
    description: 'Group command number 25',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group25 command in the Group category.' });
    }
};