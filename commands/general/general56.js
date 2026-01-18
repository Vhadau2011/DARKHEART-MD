module.exports = {
    name: 'general56',
    description: 'Functional general command: general56',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general56 is working.' });
    }
};