module.exports = {
    name: 'general22',
    description: 'Functional general command: general22',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general22 is working.' });
    }
};