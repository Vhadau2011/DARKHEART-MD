module.exports = {
    name: 'owner27',
    description: 'Owner command number 27',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the owner27 command in the Owner category.' });
    }
};