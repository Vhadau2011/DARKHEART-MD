module.exports = {
    name: 'fun34',
    description: 'Fun command number 34',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun34 command in the Fun category.' });
    }
};