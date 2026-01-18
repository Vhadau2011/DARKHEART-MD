module.exports = {
    name: 'dev36',
    description: 'Functional Dev command: dev36',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Dev command dev36 executed.' });
    }
};