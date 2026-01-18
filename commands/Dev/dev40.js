module.exports = {
    name: 'dev40',
    description: 'Functional Dev command: dev40',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev40 executed.' });
    }
};