module.exports = {
    name: 'dev23',
    description: 'Functional Dev command: dev23',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev23 executed.' });
    }
};