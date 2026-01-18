module.exports = {
    name: 'dev38',
    description: 'Functional Dev command: dev38',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev38 executed.' });
    }
};