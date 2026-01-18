module.exports = {
    name: 'fun45',
    description: 'Fun command number 45',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun45 command in the Fun category.' });
    }
};