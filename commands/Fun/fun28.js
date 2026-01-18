module.exports = {
    name: 'fun28',
    description: 'Fun command number 28',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun28 command in the Fun category.' });
    }
};