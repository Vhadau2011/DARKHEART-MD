module.exports = {
    name: 'general40',
    description: 'general command number 40',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general40 command in the general category.' });
    }
};