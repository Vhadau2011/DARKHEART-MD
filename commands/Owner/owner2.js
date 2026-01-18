module.exports = {
    name: 'owner2',
    description: 'Functional Owner command: owner2',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Owner command owner2 executed.' });
    }
};