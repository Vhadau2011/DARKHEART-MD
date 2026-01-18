module.exports = {
    name: 'general29',
    description: 'general command number 29',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general29 command in the general category.' });
    }
};