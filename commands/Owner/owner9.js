module.exports = {
    name: 'owner9',
    description: 'Owner command number 9',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the owner9 command in the Owner category.' });
    }
};