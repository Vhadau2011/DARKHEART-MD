module.exports = {
    name: 'owner24',
    description: 'Owner command number 24',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the owner24 command in the Owner category.' });
    }
};