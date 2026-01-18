module.exports = {
    name: 'dev50',
    description: 'Functional Dev command: dev50',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev50 executed.' });
    }
};