module.exports = {
    name: 'general21',
    description: 'Functional general command: general21',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general21 is working.' });
    }
};