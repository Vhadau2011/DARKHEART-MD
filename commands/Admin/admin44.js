module.exports = {
    name: 'admin44',
    description: 'Admin command number 44',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin44 command in the Admin category.' });
    }
};