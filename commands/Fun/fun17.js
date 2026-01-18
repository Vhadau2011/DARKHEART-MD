module.exports = {
    name: 'fun17',
    description: 'Fun command number 17',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun17 command in the Fun category.' });
    }
};