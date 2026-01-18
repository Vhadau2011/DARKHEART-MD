module.exports = {
    name: 'general54',
    description: 'general command number 54',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general54 command in the general category.' });
    }
};