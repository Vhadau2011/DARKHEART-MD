module.exports = {
    name: 'owner17',
    description: 'Functional Owner command: owner17',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Owner command owner17 executed.' });
    }
};