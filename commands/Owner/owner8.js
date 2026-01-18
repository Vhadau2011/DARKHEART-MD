module.exports = {
    name: 'owner8',
    description: 'Functional Owner command: owner8',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Owner command owner8 executed.' });
    }
};