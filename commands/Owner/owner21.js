module.exports = {
    name: 'owner21',
    description: 'Functional Owner command: owner21',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Owner command owner21 executed.' });
    }
};