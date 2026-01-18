module.exports = {
    name: 'group18',
    description: 'Group command number 18',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group18 command in the Group category.' });
    }
};