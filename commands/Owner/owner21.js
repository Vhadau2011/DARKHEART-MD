module.exports = {
    name: 'owner21',
    description: 'Owner command number 21',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the owner21 command in the Owner category.' });
    }
};