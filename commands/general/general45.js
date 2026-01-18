module.exports = {
    name: 'general45',
    description: 'Functional general command: general45',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general45 is working.' });
    }
};