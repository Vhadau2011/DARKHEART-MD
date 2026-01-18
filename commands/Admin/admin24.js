module.exports = {
    name: 'admin24',
    description: 'Admin command number 24',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin24 command in the Admin category.' });
    }
};