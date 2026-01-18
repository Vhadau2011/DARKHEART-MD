module.exports = {
    name: 'general36',
    description: 'general command number 36',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general36 command in the general category.' });
    }
};