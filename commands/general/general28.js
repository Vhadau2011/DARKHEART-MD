module.exports = {
    name: 'general28',
    description: 'general command number 28',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general28 command in the general category.' });
    }
};