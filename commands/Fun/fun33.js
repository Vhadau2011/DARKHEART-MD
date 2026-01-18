module.exports = {
    name: 'fun33',
    description: 'Fun command number 33',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun33 command in the Fun category.' });
    }
};