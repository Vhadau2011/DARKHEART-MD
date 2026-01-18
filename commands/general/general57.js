module.exports = {
    name: 'general57',
    description: 'Functional general command: general57',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general57 is working.' });
    }
};