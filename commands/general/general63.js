module.exports = {
    name: 'general63',
    description: 'general command number 63',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general63 command in the general category.' });
    }
};