module.exports = {
    name: 'general14',
    description: 'general command number 14',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general14 command in the general category.' });
    }
};