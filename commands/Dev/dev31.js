module.exports = {
    name: 'dev31',
    description: 'Dev command number 31',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev31 command in the Dev category.' });
    }
};