module.exports = {
    name: 'dev3',
    description: 'Functional Dev command: dev3',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev3 executed.' });
    }
};