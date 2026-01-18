module.exports = {
    name: 'fun26',
    description: 'Fun command number 26',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun26 command in the Fun category.' });
    }
};