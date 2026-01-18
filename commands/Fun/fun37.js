module.exports = {
    name: 'fun37',
    description: 'Fun command number 37',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun37 command in the Fun category.' });
    }
};