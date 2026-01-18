module.exports = {
    name: 'owner27',
    description: 'Functional Owner command: owner27',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Owner command owner27 executed.' });
    }
};