module.exports = {
    name: 'dev25',
    description: 'Functional Dev command: dev25',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev25 executed.' });
    }
};