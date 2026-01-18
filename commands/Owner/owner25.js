module.exports = {
    name: 'owner25',
    description: 'Owner command number 25',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the owner25 command in the Owner category.' });
    }
};