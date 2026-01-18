module.exports = {
    name: 'group37',
    description: 'Group command number 37',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group37 command in the Group category.' });
    }
};