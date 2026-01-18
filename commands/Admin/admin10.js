module.exports = {
    name: 'admin10',
    description: 'Admin command number 10',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin10 command in the Admin category.' });
    }
};