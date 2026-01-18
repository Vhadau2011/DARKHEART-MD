module.exports = {
    name: 'owner10',
    description: 'Owner command number 10',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the owner10 command in the Owner category.' });
    }
};