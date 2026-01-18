module.exports = {
    name: 'general65',
    description: 'Functional general command: general65',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general65 is working.' });
    }
};