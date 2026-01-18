module.exports = {
    name: 'dev49',
    description: 'Dev command number 49',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev49 command in the Dev category.' });
    }
};