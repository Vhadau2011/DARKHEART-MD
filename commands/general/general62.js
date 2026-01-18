module.exports = {
    name: 'general62',
    description: 'Functional general command: general62',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general62 is working.' });
    }
};