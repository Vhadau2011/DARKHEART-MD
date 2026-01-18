module.exports = {
    name: 'group46',
    description: 'Group command number 46',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group46 command in the Group category.' });
    }
};