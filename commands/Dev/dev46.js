module.exports = {
    name: 'dev46',
    description: 'Functional Dev command: dev46',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev46 executed.' });
    }
};