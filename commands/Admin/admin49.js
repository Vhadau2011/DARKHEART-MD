module.exports = {
    name: 'admin49',
    description: 'Admin command number 49',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin49 command in the Admin category.' });
    }
};