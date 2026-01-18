module.exports = {
    name: 'general15',
    description: 'Functional general command: general15',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general15 is working.' });
    }
};