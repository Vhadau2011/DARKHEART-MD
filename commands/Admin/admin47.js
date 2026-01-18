module.exports = {
    name: 'admin47',
    description: 'Admin command number 47',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin47 command in the Admin category.' });
    }
};