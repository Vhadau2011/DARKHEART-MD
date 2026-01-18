module.exports = {
    name: 'general32',
    description: 'general command number 32',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general32 command in the general category.' });
    }
};