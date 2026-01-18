module.exports = {
    name: 'fun48',
    description: 'Fun command number 48',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun48 command in the Fun category.' });
    }
};