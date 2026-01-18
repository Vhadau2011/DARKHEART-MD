module.exports = {
    name: 'admin3',
    description: 'Admin command number 3',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin3 command in the Admin category.' });
    }
};