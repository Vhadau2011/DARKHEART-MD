module.exports = {
    name: 'fun10',
    description: 'Fun command number 10',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun10 command in the Fun category.' });
    }
};