module.exports = {
    name: 'general3',
    description: 'general command number 3',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general3 command in the general category.' });
    }
};