module.exports = {
    name: 'general7',
    description: 'general command number 7',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general7 command in the general category.' });
    }
};