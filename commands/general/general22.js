module.exports = {
    name: 'general22',
    description: 'general command number 22',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general22 command in the general category.' });
    }
};