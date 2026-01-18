module.exports = {
    name: 'fun41',
    description: 'Fun command number 41',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun41 command in the Fun category.' });
    }
};