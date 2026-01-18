module.exports = {
    name: 'admin2',
    description: 'Admin command number 2',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin2 command in the Admin category.' });
    }
};