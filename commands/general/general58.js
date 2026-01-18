module.exports = {
    name: 'general58',
    description: 'general command number 58',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general58 command in the general category.' });
    }
};