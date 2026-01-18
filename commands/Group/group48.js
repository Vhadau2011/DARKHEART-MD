module.exports = {
    name: 'group48',
    description: 'Group command number 48',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group48 command in the Group category.' });
    }
};