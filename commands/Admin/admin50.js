module.exports = {
    name: 'admin50',
    description: 'Admin command number 50',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin50 command in the Admin category.' });
    }
};