module.exports = {
    name: 'group20',
    description: 'Group command number 20',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group20 command in the Group category.' });
    }
};