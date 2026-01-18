module.exports = {
    name: 'general8',
    description: 'Functional general command: general8',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general8 is working.' });
    }
};