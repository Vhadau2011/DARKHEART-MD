module.exports = {
    name: 'fun43',
    description: 'Fun command number 43',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun43 command in the Fun category.' });
    }
};