module.exports = {
    name: 'fun21',
    description: 'Fun command number 21',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun21 command in the Fun category.' });
    }
};