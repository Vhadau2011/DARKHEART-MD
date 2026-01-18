module.exports = {
    name: 'general20',
    description: 'general command number 20',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general20 command in the general category.' });
    }
};