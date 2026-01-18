module.exports = {
    name: 'admin18',
    description: 'Admin command number 18',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin18 command in the Admin category.' });
    }
};