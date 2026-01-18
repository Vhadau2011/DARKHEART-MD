module.exports = {
    name: 'owner15',
    description: 'Owner command number 15',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the owner15 command in the Owner category.' });
    }
};