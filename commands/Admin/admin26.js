module.exports = {
    name: 'admin26',
    description: 'Admin command number 26',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin26 command in the Admin category.' });
    }
};