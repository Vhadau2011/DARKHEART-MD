module.exports = {
    name: 'owner13',
    description: 'Owner command number 13',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the owner13 command in the Owner category.' });
    }
};