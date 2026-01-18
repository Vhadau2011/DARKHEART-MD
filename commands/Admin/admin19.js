module.exports = {
    name: 'admin19',
    description: 'Admin command number 19',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the admin19 command in the Admin category.' });
    }
};