module.exports = {
    name: 'fun30',
    description: 'Fun command number 30',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun30 command in the Fun category.' });
    }
};