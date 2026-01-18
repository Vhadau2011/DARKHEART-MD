module.exports = {
    name: 'truth',
    description: 'Perform truth action',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the truth command in the Fun category. (Placeholder)' });
    }
};