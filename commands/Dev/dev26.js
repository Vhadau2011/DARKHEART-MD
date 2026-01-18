module.exports = {
    name: 'dev26',
    description: 'Functional Dev command: dev26',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev26 executed.' });
    }
};