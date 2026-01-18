module.exports = {
    name: 'group36',
    description: 'Group command number 36',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group36 command in the Group category.' });
    }
};