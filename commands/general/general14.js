module.exports = {
    name: 'general14',
    description: 'Functional general command: general14',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general14 is working.' });
    }
};