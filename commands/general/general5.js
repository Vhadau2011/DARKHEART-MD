module.exports = {
    name: 'general5',
    description: 'Functional general command: general5',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general5 is working.' });
    }
};