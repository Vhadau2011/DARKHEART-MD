module.exports = {
    name: 'dev41',
    description: 'Dev command number 41',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev41 command in the Dev category.' });
    }
};