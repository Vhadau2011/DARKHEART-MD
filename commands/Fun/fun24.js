module.exports = {
    name: 'fun24',
    description: 'Fun command number 24',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun24 command in the Fun category.' });
    }
};