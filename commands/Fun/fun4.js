module.exports = {
    name: 'fun4',
    description: 'Fun command number 4',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun4 command in the Fun category.' });
    }
};