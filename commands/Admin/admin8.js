module.exports = {
    name: 'admin8',
    description: 'Admin command number 8',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin8 command in the Admin category.' });
    }
};