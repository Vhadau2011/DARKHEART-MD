module.exports = {
    name: 'general69',
    description: 'general command number 69',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general69 command in the general category.' });
    }
};