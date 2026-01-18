module.exports = {
    name: 'general17',
    description: 'Functional general command: general17',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general17 is working.' });
    }
};