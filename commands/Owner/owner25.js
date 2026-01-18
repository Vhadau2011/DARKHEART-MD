module.exports = {
    name: 'owner25',
    description: 'Functional Owner command: owner25',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Owner command owner25 executed.' });
    }
};