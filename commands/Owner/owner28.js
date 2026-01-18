module.exports = {
    name: 'owner28',
    description: 'Functional Owner command: owner28',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Owner command owner28 executed.' });
    }
};