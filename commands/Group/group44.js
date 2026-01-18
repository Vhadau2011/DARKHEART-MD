module.exports = {
    name: 'group44',
    description: 'Group command number 44',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group44 command in the Group category.' });
    }
};