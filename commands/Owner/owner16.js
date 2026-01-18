module.exports = {
    name: 'owner16',
    description: 'Owner command number 16',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the owner16 command in the Owner category.' });
    }
};