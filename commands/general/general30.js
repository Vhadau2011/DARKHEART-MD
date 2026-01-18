module.exports = {
    name: 'general30',
    description: 'Functional general command: general30',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general30 is working.' });
    }
};