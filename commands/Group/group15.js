module.exports = {
    name: 'group15',
    description: 'Group command number 15',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group15 command in the Group category.' });
    }
};