module.exports = {
    name: 'group6',
    description: 'Group command number 6',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group6 command in the Group category.' });
    }
};