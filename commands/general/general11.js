module.exports = {
    name: 'general11',
    description: 'general command number 11',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general11 command in the general category.' });
    }
};