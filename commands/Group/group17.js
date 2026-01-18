module.exports = {
    name: 'group17',
    description: 'Group command number 17',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group17 command in the Group category.' });
    }
};