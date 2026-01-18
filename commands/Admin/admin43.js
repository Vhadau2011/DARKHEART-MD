module.exports = {
    name: 'admin43',
    description: 'Admin command number 43',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin43 command in the Admin category.' });
    }
};