module.exports = {
    name: 'owner14',
    description: 'Functional Owner command: owner14',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Owner command owner14 executed.' });
    }
};