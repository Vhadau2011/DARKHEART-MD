module.exports = {
    name: 'general61',
    description: 'Functional general command: general61',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general61 is working.' });
    }
};