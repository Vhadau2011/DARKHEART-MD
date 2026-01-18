module.exports = {
    name: 'fun9',
    description: 'Fun command number 9',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun9 command in the Fun category.' });
    }
};