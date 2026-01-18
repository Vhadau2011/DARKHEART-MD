module.exports = {
    name: 'general49',
    description: 'general command number 49',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general49 command in the general category.' });
    }
};