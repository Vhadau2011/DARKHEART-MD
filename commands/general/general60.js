module.exports = {
    name: 'general60',
    description: 'Functional general command: general60',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general60 is working.' });
    }
};