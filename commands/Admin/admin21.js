module.exports = {
    name: 'admin21',
    description: 'Admin command number 21',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin21 command in the Admin category.' });
    }
};