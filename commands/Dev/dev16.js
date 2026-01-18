module.exports = {
    name: 'dev16',
    description: 'Dev command number 16',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev16 command in the Dev category.' });
    }
};