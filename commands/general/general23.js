module.exports = {
    name: 'general23',
    description: 'Functional general command: general23',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general23 is working.' });
    }
};