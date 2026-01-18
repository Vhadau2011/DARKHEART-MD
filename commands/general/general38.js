module.exports = {
    name: 'general38',
    description: 'Functional general command: general38',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general38 is working.' });
    }
};