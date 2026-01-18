module.exports = {
    name: 'general6',
    description: 'general command number 6',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general6 command in the general category.' });
    }
};