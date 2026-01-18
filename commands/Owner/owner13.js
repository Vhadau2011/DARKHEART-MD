module.exports = {
    name: 'owner13',
    description: 'Functional Owner command: owner13',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Owner command owner13 executed.' });
    }
};