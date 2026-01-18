module.exports = {
    name: 'fun3',
    description: 'Fun command number 3',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun3 command in the Fun category.' });
    }
};