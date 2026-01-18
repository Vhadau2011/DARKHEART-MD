module.exports = {
    name: 'owner12',
    description: 'Functional Owner command: owner12',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Owner command owner12 executed.' });
    }
};