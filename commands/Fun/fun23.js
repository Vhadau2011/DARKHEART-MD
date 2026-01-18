module.exports = {
    name: 'fun23',
    description: 'Fun command number 23',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun23 command in the Fun category.' });
    }
};