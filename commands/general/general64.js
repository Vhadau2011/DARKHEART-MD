module.exports = {
    name: 'general64',
    description: 'general command number 64',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general64 command in the general category.' });
    }
};