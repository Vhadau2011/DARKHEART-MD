module.exports = {
    name: 'admin11',
    description: 'Admin command number 11',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin11 command in the Admin category.' });
    }
};