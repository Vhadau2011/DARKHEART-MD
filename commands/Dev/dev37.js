module.exports = {
    name: 'dev37',
    description: 'Dev command number 37',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev37 command in the Dev category.' });
    }
};