module.exports = {
    name: 'fun40',
    description: 'Fun command number 40',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun40 command in the Fun category.' });
    }
};