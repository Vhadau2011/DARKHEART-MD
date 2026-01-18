module.exports = {
    name: 'general51',
    description: 'general command number 51',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general51 command in the general category.' });
    }
};