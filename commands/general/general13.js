module.exports = {
    name: 'general13',
    description: 'general command number 13',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general13 command in the general category.' });
    }
};