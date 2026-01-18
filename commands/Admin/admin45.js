module.exports = {
    name: 'admin45',
    description: 'Admin command number 45',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin45 command in the Admin category.' });
    }
};