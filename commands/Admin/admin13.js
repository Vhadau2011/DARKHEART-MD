module.exports = {
    name: 'admin13',
    description: 'Admin command number 13',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin13 command in the Admin category.' });
    }
};