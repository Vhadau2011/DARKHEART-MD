module.exports = {
    name: 'owner1',
    description: 'Functional Owner command: owner1',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Owner command owner1 executed.' });
    }
};