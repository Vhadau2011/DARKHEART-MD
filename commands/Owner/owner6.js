module.exports = {
    name: 'owner6',
    description: 'Owner command number 6',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the owner6 command in the Owner category.' });
    }
};