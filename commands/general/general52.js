module.exports = {
    name: 'general52',
    description: 'Functional general command: general52',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general52 is working.' });
    }
};