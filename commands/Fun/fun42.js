module.exports = {
    name: 'fun42',
    description: 'Fun command number 42',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun42 command in the Fun category.' });
    }
};