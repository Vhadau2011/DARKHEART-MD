module.exports = {
    name: 'general37',
    description: 'Functional general command: general37',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general37 is working.' });
    }
};