module.exports = {
    name: 'general48',
    description: 'general command number 48',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general48 command in the general category.' });
    }
};