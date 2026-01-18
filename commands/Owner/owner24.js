module.exports = {
    name: 'owner24',
    description: 'Functional Owner command: owner24',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Owner command owner24 executed.' });
    }
};