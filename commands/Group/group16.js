module.exports = {
    name: 'group16',
    description: 'Group command number 16',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group16 command in the Group category.' });
    }
};