module.exports = {
    name: 'group40',
    description: 'Group command number 40',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group40 command in the Group category.' });
    }
};