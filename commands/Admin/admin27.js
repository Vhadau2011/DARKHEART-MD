module.exports = {
    name: 'admin27',
    description: 'Admin command number 27',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin27 command in the Admin category.' });
    }
};