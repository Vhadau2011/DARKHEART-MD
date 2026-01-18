module.exports = {
    name: 'general37',
    description: 'general command number 37',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general37 command in the general category.' });
    }
};