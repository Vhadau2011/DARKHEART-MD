module.exports = {
    name: 'admin7',
    description: 'Admin command number 7',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin7 command in the Admin category.' });
    }
};