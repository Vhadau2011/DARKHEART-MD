module.exports = {
    name: 'admin9',
    description: 'Admin command number 9',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin9 command in the Admin category.' });
    }
};