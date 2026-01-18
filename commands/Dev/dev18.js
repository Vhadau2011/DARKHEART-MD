module.exports = {
    name: 'dev18',
    description: 'Functional Dev command: dev18',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev18 executed.' });
    }
};