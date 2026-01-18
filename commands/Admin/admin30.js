module.exports = {
    name: 'admin30',
    description: 'Admin command number 30',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin30 command in the Admin category.' });
    }
};