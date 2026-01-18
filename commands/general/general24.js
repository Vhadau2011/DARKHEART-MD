module.exports = {
    name: 'general24',
    description: 'general command number 24',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general24 command in the general category.' });
    }
};