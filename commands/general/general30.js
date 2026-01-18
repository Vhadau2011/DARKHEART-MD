module.exports = {
    name: 'general30',
    description: 'general command number 30',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general30 command in the general category.' });
    }
};