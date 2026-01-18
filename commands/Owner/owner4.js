module.exports = {
    name: 'owner4',
    description: 'Functional Owner command: owner4',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Owner command owner4 executed.' });
    }
};