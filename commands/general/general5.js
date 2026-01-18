module.exports = {
    name: 'general5',
    description: 'general command number 5',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general5 command in the general category.' });
    }
};