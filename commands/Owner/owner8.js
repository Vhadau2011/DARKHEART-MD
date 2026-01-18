module.exports = {
    name: 'owner8',
    description: 'Owner command number 8',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the owner8 command in the Owner category.' });
    }
};