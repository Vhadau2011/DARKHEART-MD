module.exports = {
    name: 'group30',
    description: 'Group command number 30',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the group30 command in the Group category.' });
    }
};