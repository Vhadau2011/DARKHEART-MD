module.exports = {
    name: 'general27',
    description: 'general command number 27',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general27 command in the general category.' });
    }
};