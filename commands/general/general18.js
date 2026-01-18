module.exports = {
    name: 'general18',
    description: 'general command number 18',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general18 command in the general category.' });
    }
};