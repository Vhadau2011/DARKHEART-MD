module.exports = {
    name: 'owner3',
    description: 'Functional Owner command: owner3',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Owner command owner3 executed.' });
    }
};