module.exports = {
    name: 'fun22',
    description: 'Fun command number 22',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun22 command in the Fun category.' });
    }
};