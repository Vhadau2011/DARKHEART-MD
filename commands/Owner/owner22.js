module.exports = {
    name: 'owner22',
    description: 'Owner command number 22',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the owner22 command in the Owner category.' });
    }
};