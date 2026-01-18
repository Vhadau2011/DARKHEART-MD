module.exports = {
    name: 'general63',
    description: 'Functional general command: general63',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general63 is working.' });
    }
};