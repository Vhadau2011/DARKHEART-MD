module.exports = {
    name: 'owner22',
    description: 'Functional Owner command: owner22',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Owner command owner22 executed.' });
    }
};