module.exports = {
    name: 'group29',
    description: 'Group command number 29',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group29 command in the Group category.' });
    }
};