module.exports = {
    name: 'general12',
    description: 'general command number 12',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general12 command in the general category.' });
    }
};