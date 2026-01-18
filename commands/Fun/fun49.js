module.exports = {
    name: 'fun49',
    description: 'Fun command number 49',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun49 command in the Fun category.' });
    }
};