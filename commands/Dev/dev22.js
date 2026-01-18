module.exports = {
    name: 'dev22',
    description: 'Dev command number 22',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev22 command in the Dev category.' });
    }
};