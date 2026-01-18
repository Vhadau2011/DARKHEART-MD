module.exports = {
    name: 'general17',
    description: 'general command number 17',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general17 command in the general category.' });
    }
};