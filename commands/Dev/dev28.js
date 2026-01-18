module.exports = {
    name: 'dev28',
    description: 'Functional Dev command: dev28',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev28 executed.' });
    }
};