module.exports = {
    name: 'owner23',
    description: 'Owner command number 23',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the owner23 command in the Owner category.' });
    }
};