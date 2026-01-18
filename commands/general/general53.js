module.exports = {
    name: 'general53',
    description: 'general command number 53',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general53 command in the general category.' });
    }
};