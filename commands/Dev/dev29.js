module.exports = {
    name: 'dev29',
    description: 'Dev command number 29',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev29 command in the Dev category.' });
    }
};