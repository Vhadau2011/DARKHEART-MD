module.exports = {
    name: 'admin14',
    description: 'Admin command number 14',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin14 command in the Admin category.' });
    }
};