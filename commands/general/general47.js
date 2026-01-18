module.exports = {
    name: 'general47',
    description: 'Functional general command: general47',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general47 is working.' });
    }
};