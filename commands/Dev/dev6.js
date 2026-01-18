module.exports = {
    name: 'dev6',
    description: 'Functional Dev command: dev6',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev6 executed.' });
    }
};