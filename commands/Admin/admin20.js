module.exports = {
    name: 'admin20',
    description: 'Admin command number 20',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin20 command in the Admin category.' });
    }
};