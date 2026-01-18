module.exports = {
    name: 'general28',
    description: 'Functional general command: general28',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general28 is working.' });
    }
};