module.exports = {
    name: 'dev27',
    description: 'Dev command number 27',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev27 command in the Dev category.' });
    }
};