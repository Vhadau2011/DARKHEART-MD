module.exports = {
    name: 'general52',
    description: 'general command number 52',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general52 command in the general category.' });
    }
};