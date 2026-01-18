module.exports = {
    name: 'dev49',
    description: 'Functional Dev command: dev49',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev49 executed.' });
    }
};