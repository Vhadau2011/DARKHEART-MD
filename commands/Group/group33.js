module.exports = {
    name: 'group33',
    description: 'Group command number 33',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group33 command in the Group category.' });
    }
};