module.exports = {
    name: 'general41',
    description: 'Functional general command: general41',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general41 is working.' });
    }
};