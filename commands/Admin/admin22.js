module.exports = {
    name: 'admin22',
    description: 'Admin command number 22',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin22 command in the Admin category.' });
    }
};