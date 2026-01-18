module.exports = {
    name: 'general8',
    description: 'general command number 8',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general8 command in the general category.' });
    }
};