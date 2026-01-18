module.exports = {
    name: 'owner26',
    description: 'Functional Owner command: owner26',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Owner command owner26 executed.' });
    }
};