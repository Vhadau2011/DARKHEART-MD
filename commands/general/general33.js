module.exports = {
    name: 'general33',
    description: 'Functional general command: general33',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general33 is working.' });
    }
};