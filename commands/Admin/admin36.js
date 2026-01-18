module.exports = {
    name: 'admin36',
    description: 'Admin command number 36',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin36 command in the Admin category.' });
    }
};