module.exports = {
    name: 'owner5',
    description: 'Owner command number 5',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the owner5 command in the Owner category.' });
    }
};