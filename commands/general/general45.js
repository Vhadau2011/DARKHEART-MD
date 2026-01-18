module.exports = {
    name: 'general45',
    description: 'general command number 45',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general45 command in the general category.' });
    }
};