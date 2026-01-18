module.exports = {
    name: 'general25',
    description: 'general command number 25',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general25 command in the general category.' });
    }
};