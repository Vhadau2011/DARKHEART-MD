module.exports = {
    name: 'general13',
    description: 'Functional general command: general13',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general13 is working.' });
    }
};