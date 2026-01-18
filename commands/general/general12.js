module.exports = {
    name: 'general12',
    description: 'Functional general command: general12',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general12 is working.' });
    }
};