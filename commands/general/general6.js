module.exports = {
    name: 'general6',
    description: 'Functional general command: general6',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general6 is working.' });
    }
};