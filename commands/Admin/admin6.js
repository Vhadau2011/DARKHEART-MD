module.exports = {
    name: 'admin6',
    description: 'Admin command number 6',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin6 command in the Admin category.' });
    }
};