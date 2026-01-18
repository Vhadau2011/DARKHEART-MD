module.exports = {
    name: 'dev10',
    description: 'Dev command number 10',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev10 command in the Dev category.' });
    }
};