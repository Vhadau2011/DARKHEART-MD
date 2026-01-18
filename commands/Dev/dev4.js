module.exports = {
    name: 'dev4',
    description: 'Functional Dev command: dev4',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev4 executed.' });
    }
};