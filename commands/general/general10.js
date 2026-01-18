module.exports = {
    name: 'general10',
    description: 'general command number 10',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general10 command in the general category.' });
    }
};