module.exports = {
    name: 'admin1',
    description: 'Admin command number 1',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin1 command in the Admin category.' });
    }
};