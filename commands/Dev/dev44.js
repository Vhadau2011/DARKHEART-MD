module.exports = {
    name: 'dev44',
    description: 'Functional Dev command: dev44',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev44 executed.' });
    }
};