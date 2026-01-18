module.exports = {
    name: 'dev5',
    description: 'Functional Dev command: dev5',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev5 executed.' });
    }
};