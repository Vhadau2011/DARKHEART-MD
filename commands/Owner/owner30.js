module.exports = {
    name: 'owner30',
    description: 'Owner command number 30',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the owner30 command in the Owner category.' });
    }
};