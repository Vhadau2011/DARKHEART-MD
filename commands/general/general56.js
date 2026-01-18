module.exports = {
    name: 'general56',
    description: 'general command number 56',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general56 command in the general category.' });
    }
};