module.exports = {
    name: 'owner28',
    description: 'Owner command number 28',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the owner28 command in the Owner category.' });
    }
};