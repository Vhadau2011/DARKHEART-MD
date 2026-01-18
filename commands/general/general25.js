module.exports = {
    name: 'general25',
    description: 'Functional general command: general25',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general25 is working.' });
    }
};