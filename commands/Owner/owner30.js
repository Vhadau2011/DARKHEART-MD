module.exports = {
    name: 'owner30',
    description: 'Functional Owner command: owner30',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Owner command owner30 executed.' });
    }
};