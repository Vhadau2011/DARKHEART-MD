module.exports = {
    name: 'general33',
    description: 'general command number 33',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general33 command in the general category.' });
    }
};