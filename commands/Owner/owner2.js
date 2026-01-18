module.exports = {
    name: 'owner2',
    description: 'Owner command number 2',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the owner2 command in the Owner category.' });
    }
};