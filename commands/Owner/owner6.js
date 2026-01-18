module.exports = {
    name: 'owner6',
    description: 'Functional Owner command: owner6',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Owner command owner6 executed.' });
    }
};