module.exports = {
    name: 'general62',
    description: 'general command number 62',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general62 command in the general category.' });
    }
};