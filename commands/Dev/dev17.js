module.exports = {
    name: 'dev17',
    description: 'Functional Dev command: dev17',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev17 executed.' });
    }
};