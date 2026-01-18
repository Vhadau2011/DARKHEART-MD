module.exports = {
    name: 'dev10',
    description: 'Functional Dev command: dev10',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev10 executed.' });
    }
};