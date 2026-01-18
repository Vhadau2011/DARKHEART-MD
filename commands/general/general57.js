module.exports = {
    name: 'general57',
    description: 'general command number 57',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general57 command in the general category.' });
    }
};