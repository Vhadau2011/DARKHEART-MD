module.exports = {
    name: 'general26',
    description: 'Functional general command: general26',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general26 is working.' });
    }
};