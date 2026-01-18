module.exports = {
    name: 'owner18',
    description: 'Functional Owner command: owner18',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Owner command owner18 executed.' });
    }
};