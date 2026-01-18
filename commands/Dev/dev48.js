module.exports = {
    name: 'dev48',
    description: 'Functional Dev command: dev48',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev48 executed.' });
    }
};