module.exports = {
    name: 'general40',
    description: 'Functional general command: general40',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general40 is working.' });
    }
};