module.exports = {
    name: 'group14',
    description: 'Group command number 14',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group14 command in the Group category.' });
    }
};