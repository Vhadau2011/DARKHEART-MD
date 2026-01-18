module.exports = {
    name: 'admin33',
    description: 'Admin command number 33',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin33 command in the Admin category.' });
    }
};