module.exports = {
    name: 'dev41',
    description: 'Functional Dev command: dev41',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev41 executed.' });
    }
};