module.exports = {
    name: 'dev47',
    description: 'Functional Dev command: dev47',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev47 executed.' });
    }
};