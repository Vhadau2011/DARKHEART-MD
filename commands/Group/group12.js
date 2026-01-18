module.exports = {
    name: 'group12',
    description: 'Group command number 12',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group12 command in the Group category.' });
    }
};