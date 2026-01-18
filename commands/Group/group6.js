module.exports = {
    name: 'group6',
    description: 'Functional Group command: group6',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Group command group6 executed.' });
    }
};