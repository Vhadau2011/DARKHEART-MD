module.exports = {
    name: 'owner9',
    description: 'Functional Owner command: owner9',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Owner command owner9 executed.' });
    }
};