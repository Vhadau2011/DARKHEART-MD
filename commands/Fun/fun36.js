module.exports = {
    name: 'fun36',
    description: 'Fun command number 36',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun36 command in the Fun category.' });
    }
};