module.exports = {
    name: 'general47',
    description: 'general command number 47',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general47 command in the general category.' });
    }
};