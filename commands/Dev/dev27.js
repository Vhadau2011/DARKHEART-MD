module.exports = {
    name: 'dev27',
    description: 'Functional Dev command: dev27',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev27 executed.' });
    }
};