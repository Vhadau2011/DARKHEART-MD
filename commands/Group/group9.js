module.exports = {
    name: 'group9',
    description: 'Group command number 9',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group9 command in the Group category.' });
    }
};