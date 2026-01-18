module.exports = {
    name: 'dev1',
    description: 'Functional Dev command: dev1',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev1 executed.' });
    }
};