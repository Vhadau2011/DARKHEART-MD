module.exports = {
    name: 'owner29',
    description: 'Owner command number 29',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the owner29 command in the Owner category.' });
    }
};