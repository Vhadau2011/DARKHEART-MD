module.exports = {
    name: 'dev14',
    description: 'Functional Dev command: dev14',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev14 executed.' });
    }
};