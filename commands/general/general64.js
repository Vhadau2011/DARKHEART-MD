module.exports = {
    name: 'general64',
    description: 'Functional general command: general64',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general64 is working.' });
    }
};