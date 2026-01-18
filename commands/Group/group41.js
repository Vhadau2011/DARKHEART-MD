module.exports = {
    name: 'group41',
    description: 'Group command number 41',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group41 command in the Group category.' });
    }
};