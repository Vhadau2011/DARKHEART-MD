module.exports = {
    name: 'general49',
    description: 'Functional general command: general49',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general49 is working.' });
    }
};