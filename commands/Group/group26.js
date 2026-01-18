module.exports = {
    name: 'group26',
    description: 'Group command number 26',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group26 command in the Group category.' });
    }
};