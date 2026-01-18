module.exports = {
    name: 'admin42',
    description: 'Admin command number 42',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin42 command in the Admin category.' });
    }
};