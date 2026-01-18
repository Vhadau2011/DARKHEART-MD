module.exports = {
    name: 'general20',
    description: 'Functional general command: general20',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general20 is working.' });
    }
};