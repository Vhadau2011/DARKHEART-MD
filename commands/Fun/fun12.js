module.exports = {
    name: 'fun12',
    description: 'Fun command number 12',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun12 command in the Fun category.' });
    }
};