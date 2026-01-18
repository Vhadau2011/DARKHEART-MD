module.exports = {
    name: 'group7',
    description: 'Group command number 7',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group7 command in the Group category.' });
    }
};