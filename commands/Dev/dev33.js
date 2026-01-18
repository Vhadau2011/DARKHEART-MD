module.exports = {
    name: 'dev33',
    description: 'Functional Dev command: dev33',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev33 executed.' });
    }
};