module.exports = {
    name: 'general3',
    description: 'Functional general command: general3',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general3 is working.' });
    }
};