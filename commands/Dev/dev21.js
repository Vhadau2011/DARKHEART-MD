module.exports = {
    name: 'dev21',
    description: 'Functional Dev command: dev21',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev21 executed.' });
    }
};