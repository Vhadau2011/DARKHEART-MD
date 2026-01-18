module.exports = {
    name: 'admin25',
    description: 'Admin command number 25',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin25 command in the Admin category.' });
    }
};