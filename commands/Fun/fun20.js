module.exports = {
    name: 'fun20',
    description: 'Fun command number 20',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the fun20 command in the Fun category.' });
    }
};