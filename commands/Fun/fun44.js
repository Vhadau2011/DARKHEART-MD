module.exports = {
    name: 'fun44',
    description: 'Fun command number 44',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun44 command in the Fun category.' });
    }
};