module.exports = {
    name: 'admin16',
    description: 'Admin command number 16',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin16 command in the Admin category.' });
    }
};