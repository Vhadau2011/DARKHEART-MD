module.exports = {
    name: 'general1',
    description: 'general command number 1',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general1 command in the general category.' });
    }
};