module.exports = {
    name: 'group3',
    description: 'Group command number 3',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group3 command in the Group category.' });
    }
};