module.exports = {
    name: 'fun5',
    description: 'Fun command number 5',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun5 command in the Fun category.' });
    }
};