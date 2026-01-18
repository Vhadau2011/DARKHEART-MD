module.exports = {
    name: 'group32',
    description: 'Group command number 32',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group32 command in the Group category.' });
    }
};