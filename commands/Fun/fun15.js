module.exports = {
    name: 'fun15',
    description: 'Fun command number 15',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun15 command in the Fun category.' });
    }
};