module.exports = {
    name: 'admin32',
    description: 'Admin command number 32',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin32 command in the Admin category.' });
    }
};