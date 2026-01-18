module.exports = {
    name: 'owner17',
    description: 'Owner command number 17',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the owner17 command in the Owner category.' });
    }
};