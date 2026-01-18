module.exports = {
    name: 'fun2',
    description: 'Fun command number 2',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun2 command in the Fun category.' });
    }
};