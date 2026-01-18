module.exports = {
    name: 'owner15',
    description: 'Functional Owner command: owner15',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Owner command owner15 executed.' });
    }
};