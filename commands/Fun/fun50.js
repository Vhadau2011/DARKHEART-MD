module.exports = {
    name: 'fun50',
    description: 'Fun command number 50',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun50 command in the Fun category.' });
    }
};