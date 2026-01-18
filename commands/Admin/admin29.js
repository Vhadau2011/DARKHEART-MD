module.exports = {
    name: 'admin29',
    description: 'Admin command number 29',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin29 command in the Admin category.' });
    }
};