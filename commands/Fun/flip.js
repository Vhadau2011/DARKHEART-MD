module.exports = {
    name: 'flip',
    description: 'Flip a coin',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the flip command in the Fun category. (Placeholder)' });
    }
};