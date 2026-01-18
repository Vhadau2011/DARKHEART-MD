module.exports = {
    name: 'ship',
    description: 'Check compatibility between two people',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the ship command in the Fun category. (Placeholder)' });
    }
};