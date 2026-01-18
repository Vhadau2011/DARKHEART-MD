module.exports = {
    name: 'group42',
    description: 'Group command number 42',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group42 command in the Group category.' });
    }
};