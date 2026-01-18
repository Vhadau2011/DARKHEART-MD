module.exports = {
    name: 'owner11',
    description: 'Owner command number 11',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the owner11 command in the Owner category.' });
    }
};