module.exports = {
    name: 'group11',
    description: 'Group command number 11',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group11 command in the Group category.' });
    }
};