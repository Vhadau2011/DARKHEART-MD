module.exports = {
    name: 'general18',
    description: 'Functional general command: general18',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general18 is working.' });
    }
};