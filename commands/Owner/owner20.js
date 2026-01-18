module.exports = {
    name: 'owner20',
    description: 'Owner command number 20',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the owner20 command in the Owner category.' });
    }
};