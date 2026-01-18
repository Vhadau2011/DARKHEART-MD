module.exports = {
    name: 'general48',
    description: 'Functional general command: general48',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general48 is working.' });
    }
};