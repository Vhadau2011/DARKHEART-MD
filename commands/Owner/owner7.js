module.exports = {
    name: 'owner7',
    description: 'Owner command number 7',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the owner7 command in the Owner category.' });
    }
};