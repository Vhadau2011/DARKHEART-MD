module.exports = {
    name: 'general65',
    description: 'general command number 65',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general65 command in the general category.' });
    }
};