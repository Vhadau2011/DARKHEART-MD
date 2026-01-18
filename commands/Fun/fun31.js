module.exports = {
    name: 'fun31',
    description: 'Fun command number 31',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun31 command in the Fun category.' });
    }
};