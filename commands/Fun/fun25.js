module.exports = {
    name: 'fun25',
    description: 'Fun command number 25',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun25 command in the Fun category.' });
    }
};