module.exports = {
    name: 'general2',
    description: 'general command number 2',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general2 command in the general category.' });
    }
};