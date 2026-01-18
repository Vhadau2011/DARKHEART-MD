module.exports = {
    name: 'general51',
    description: 'Functional general command: general51',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general51 is working.' });
    }
};