module.exports = {
    name: 'admin37',
    description: 'Admin command number 37',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin37 command in the Admin category.' });
    }
};