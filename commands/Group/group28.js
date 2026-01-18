module.exports = {
    name: 'group28',
    description: 'Group command number 28',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group28 command in the Group category.' });
    }
};