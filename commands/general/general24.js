module.exports = {
    name: 'general24',
    description: 'Functional general command: general24',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general24 is working.' });
    }
};