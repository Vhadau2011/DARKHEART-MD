module.exports = {
    name: 'general26',
    description: 'general command number 26',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general26 command in the general category.' });
    }
};