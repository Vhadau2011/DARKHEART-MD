module.exports = {
    name: 'dev24',
    description: 'Functional Dev command: dev24',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev24 executed.' });
    }
};