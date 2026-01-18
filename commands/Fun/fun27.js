module.exports = {
    name: 'fun27',
    description: 'Fun command number 27',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun27 command in the Fun category.' });
    }
};