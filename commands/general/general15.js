module.exports = {
    name: 'general15',
    description: 'general command number 15',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the general15 command in the general category.' });
    }
};