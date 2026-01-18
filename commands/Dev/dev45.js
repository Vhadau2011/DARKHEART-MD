module.exports = {
    name: 'dev45',
    description: 'Functional Dev command: dev45',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev45 executed.' });
    }
};