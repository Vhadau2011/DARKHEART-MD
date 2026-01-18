module.exports = {
    name: 'general21',
    description: 'general command number 21',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general21 command in the general category.' });
    }
};