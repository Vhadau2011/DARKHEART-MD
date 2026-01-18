module.exports = {
    name: 'dev13',
    description: 'Functional Dev command: dev13',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev13 executed.' });
    }
};