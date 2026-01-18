module.exports = {
    name: 'owner26',
    description: 'Owner command number 26',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the owner26 command in the Owner category.' });
    }
};