module.exports = {
    name: 'owner14',
    description: 'Owner command number 14',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the owner14 command in the Owner category.' });
    }
};