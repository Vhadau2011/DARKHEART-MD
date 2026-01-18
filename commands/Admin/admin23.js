module.exports = {
    name: 'admin23',
    description: 'Admin command number 23',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin23 command in the Admin category.' });
    }
};