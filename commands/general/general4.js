module.exports = {
    name: 'general4',
    description: 'general command number 4',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general4 command in the general category.' });
    }
};