module.exports = {
    name: 'general9',
    description: 'general command number 9',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general9 command in the general category.' });
    }
};