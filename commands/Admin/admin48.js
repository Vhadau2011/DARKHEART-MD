module.exports = {
    name: 'admin48',
    description: 'Admin command number 48',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin48 command in the Admin category.' });
    }
};