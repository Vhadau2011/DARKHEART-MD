module.exports = {
    name: 'group10',
    description: 'Group command number 10',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group10 command in the Group category.' });
    }
};