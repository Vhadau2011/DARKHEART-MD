module.exports = {
    name: 'owner23',
    description: 'Functional Owner command: owner23',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Owner command owner23 executed.' });
    }
};