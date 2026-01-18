module.exports = {
    name: 'general44',
    description: 'general command number 44',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general44 command in the general category.' });
    }
};