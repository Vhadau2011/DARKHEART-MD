module.exports = {
    name: 'general44',
    description: 'Functional general command: general44',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general44 is working.' });
    }
};