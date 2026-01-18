module.exports = {
    name: 'dev30',
    description: 'Functional Dev command: dev30',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev30 executed.' });
    }
};