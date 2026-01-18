module.exports = {
    name: 'group38',
    description: 'Group command number 38',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group38 command in the Group category.' });
    }
};