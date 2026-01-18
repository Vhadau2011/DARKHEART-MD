module.exports = {
    name: 'general50',
    description: 'Functional general command: general50',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general50 is working.' });
    }
};