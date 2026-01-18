module.exports = {
    name: 'general66',
    description: 'Functional general command: general66',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general66 is working.' });
    }
};