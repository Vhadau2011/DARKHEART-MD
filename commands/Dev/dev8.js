module.exports = {
    name: 'dev8',
    description: 'Functional Dev command: dev8',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev8 executed.' });
    }
};