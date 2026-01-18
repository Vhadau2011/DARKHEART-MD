module.exports = {
    name: 'general27',
    description: 'Functional general command: general27',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general27 is working.' });
    }
};