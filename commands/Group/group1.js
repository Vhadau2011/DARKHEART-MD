module.exports = {
    name: 'group1',
    description: 'Group command number 1',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group1 command in the Group category.' });
    }
};