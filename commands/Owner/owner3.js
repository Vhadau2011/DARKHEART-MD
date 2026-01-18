module.exports = {
    name: 'owner3',
    description: 'Owner command number 3',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the owner3 command in the Owner category.' });
    }
};