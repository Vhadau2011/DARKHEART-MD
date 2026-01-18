module.exports = {
    name: 'general53',
    description: 'Functional general command: general53',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general53 is working.' });
    }
};