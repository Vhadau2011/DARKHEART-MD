module.exports = {
    name: 'admin28',
    description: 'Admin command number 28',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin28 command in the Admin category.' });
    }
};