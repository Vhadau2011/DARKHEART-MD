module.exports = {
    name: 'general46',
    description: 'Functional general command: general46',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'General command general46 is working.' });
    }
};