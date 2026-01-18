module.exports = {
    name: 'owner20',
    description: 'Functional Owner command: owner20',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Owner command owner20 executed.' });
    }
};