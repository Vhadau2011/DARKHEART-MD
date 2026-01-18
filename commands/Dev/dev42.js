module.exports = {
    name: 'dev42',
    description: 'Functional Dev command: dev42',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev42 executed.' });
    }
};