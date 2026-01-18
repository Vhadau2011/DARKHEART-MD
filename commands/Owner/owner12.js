module.exports = {
    name: 'owner12',
    description: 'Owner command number 12',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the owner12 command in the Owner category.' });
    }
};