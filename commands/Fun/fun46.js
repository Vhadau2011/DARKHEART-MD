module.exports = {
    name: 'fun46',
    description: 'Fun command number 46',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun46 command in the Fun category.' });
    }
};