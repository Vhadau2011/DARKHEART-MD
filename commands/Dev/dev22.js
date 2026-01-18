module.exports = {
    name: 'dev22',
    description: 'Functional Dev command: dev22',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev22 executed.' });
    }
};