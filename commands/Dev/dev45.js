module.exports = {
    name: 'dev45',
    description: 'Dev command number 45',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev45 command in the Dev category.' });
    }
};