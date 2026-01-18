module.exports = {
    name: 'admin38',
    description: 'Admin command number 38',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin38 command in the Admin category.' });
    }
};