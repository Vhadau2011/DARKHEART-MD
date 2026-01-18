module.exports = {
    name: 'general67',
    description: 'general command number 67',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general67 command in the general category.' });
    }
};