module.exports = {
    name: 'fun18',
    description: 'Fun command number 18',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun18 command in the Fun category.' });
    }
};