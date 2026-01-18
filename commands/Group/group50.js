module.exports = {
    name: 'group50',
    description: 'Group command number 50',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group50 command in the Group category.' });
    }
};