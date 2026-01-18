module.exports = {
    name: 'general50',
    description: 'general command number 50',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general50 command in the general category.' });
    }
};