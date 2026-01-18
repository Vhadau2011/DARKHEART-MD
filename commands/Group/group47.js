module.exports = {
    name: 'group47',
    description: 'Group command number 47',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group47 command in the Group category.' });
    }
};