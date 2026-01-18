module.exports = {
    name: 'dev32',
    description: 'Functional Dev command: dev32',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev32 executed.' });
    }
};