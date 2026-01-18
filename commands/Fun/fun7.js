module.exports = {
    name: 'fun7',
    description: 'Fun command number 7',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun7 command in the Fun category.' });
    }
};