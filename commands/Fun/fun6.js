module.exports = {
    name: 'fun6',
    description: 'Fun command number 6',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun6 command in the Fun category.' });
    }
};