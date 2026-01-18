module.exports = {
    name: 'group24',
    description: 'Functional Group command: group24',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Group command group24 executed.' });
    }
};