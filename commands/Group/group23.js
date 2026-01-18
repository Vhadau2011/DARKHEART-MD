module.exports = {
    name: 'group23',
    description: 'Group command number 23',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group23 command in the Group category.' });
    }
};