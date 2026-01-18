module.exports = {
    name: 'admin40',
    description: 'Admin command number 40',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin40 command in the Admin category.' });
    }
};