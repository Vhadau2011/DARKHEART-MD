module.exports = {
    name: 'general2',
    description: 'Functional general command: general2',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general2 is working.' });
    }
};