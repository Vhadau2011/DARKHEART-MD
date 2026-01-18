module.exports = {
    name: 'admin46',
    description: 'Admin command number 46',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin46 command in the Admin category.' });
    }
};