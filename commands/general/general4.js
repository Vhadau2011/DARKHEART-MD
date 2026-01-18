module.exports = {
    name: 'general4',
    description: 'Functional general command: general4',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general4 is working.' });
    }
};