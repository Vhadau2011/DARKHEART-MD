module.exports = {
    name: 'admin31',
    description: 'Admin command number 31',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin31 command in the Admin category.' });
    }
};