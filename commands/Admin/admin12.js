module.exports = {
    name: 'admin12',
    description: 'Admin command number 12',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin12 command in the Admin category.' });
    }
};