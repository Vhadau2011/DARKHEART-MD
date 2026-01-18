module.exports = {
    name: 'fun32',
    description: 'Fun command number 32',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun32 command in the Fun category.' });
    }
};