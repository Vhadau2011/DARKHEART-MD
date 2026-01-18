module.exports = {
    name: 'owner18',
    description: 'Owner command number 18',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the owner18 command in the Owner category.' });
    }
};