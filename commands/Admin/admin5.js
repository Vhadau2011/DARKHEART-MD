module.exports = {
    name: 'admin5',
    description: 'Admin command number 5',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin5 command in the Admin category.' });
    }
};