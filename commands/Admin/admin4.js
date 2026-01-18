module.exports = {
    name: 'admin4',
    description: 'Admin command number 4',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin4 command in the Admin category.' });
    }
};