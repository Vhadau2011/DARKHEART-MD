module.exports = {
    name: 'fun11',
    description: 'Fun command number 11',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun11 command in the Fun category.' });
    }
};