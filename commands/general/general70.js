module.exports = {
    name: 'general70',
    description: 'general command number 70',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general70 command in the general category.' });
    }
};