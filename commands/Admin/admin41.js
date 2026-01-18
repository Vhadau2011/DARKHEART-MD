module.exports = {
    name: 'admin41',
    description: 'Admin command number 41',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin41 command in the Admin category.' });
    }
};