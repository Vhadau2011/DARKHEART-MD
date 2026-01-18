module.exports = {
    name: 'admin17',
    description: 'Admin command number 17',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin17 command in the Admin category.' });
    }
};