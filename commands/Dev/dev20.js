module.exports = {
    name: 'dev20',
    description: 'Functional Dev command: dev20',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev20 executed.' });
    }
};