module.exports = {
    name: 'general23',
    description: 'general command number 23',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general23 command in the general category.' });
    }
};