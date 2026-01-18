module.exports = {
    name: 'dev2',
    description: 'Functional Dev command: dev2',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev2 executed.' });
    }
};