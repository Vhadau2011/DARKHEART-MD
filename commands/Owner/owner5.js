module.exports = {
    name: 'owner5',
    description: 'Functional Owner command: owner5',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Owner command owner5 executed.' });
    }
};