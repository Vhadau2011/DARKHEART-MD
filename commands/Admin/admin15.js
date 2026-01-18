module.exports = {
    name: 'admin15',
    description: 'Admin command number 15',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin15 command in the Admin category.' });
    }
};