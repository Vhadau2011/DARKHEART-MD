module.exports = {
    name: 'general36',
    description: 'Functional general command: general36',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general36 is working.' });
    }
};