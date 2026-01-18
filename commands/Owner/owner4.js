module.exports = {
    name: 'owner4',
    description: 'Owner command number 4',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the owner4 command in the Owner category.' });
    }
};