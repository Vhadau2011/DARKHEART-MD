module.exports = {
    name: 'fun39',
    description: 'Fun command number 39',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun39 command in the Fun category.' });
    }
};