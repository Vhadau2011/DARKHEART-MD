module.exports = {
    name: 'general46',
    description: 'general command number 46',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general46 command in the general category.' });
    }
};