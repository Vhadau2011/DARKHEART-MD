module.exports = {
    name: 'general31',
    description: 'general command number 31',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general31 command in the general category.' });
    }
};