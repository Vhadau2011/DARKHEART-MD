module.exports = {
    name: 'fun13',
    description: 'Fun command number 13',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun13 command in the Fun category.' });
    }
};