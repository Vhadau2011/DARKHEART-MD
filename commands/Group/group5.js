module.exports = {
    name: 'group5',
    description: 'Group command number 5',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group5 command in the Group category.' });
    }
};