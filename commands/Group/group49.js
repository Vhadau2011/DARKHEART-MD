module.exports = {
    name: 'group49',
    description: 'Group command number 49',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group49 command in the Group category.' });
    }
};