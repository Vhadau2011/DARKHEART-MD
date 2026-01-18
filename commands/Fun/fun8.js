module.exports = {
    name: 'fun8',
    description: 'Fun command number 8',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun8 command in the Fun category.' });
    }
};