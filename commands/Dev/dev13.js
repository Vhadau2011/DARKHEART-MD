module.exports = {
    name: 'dev13',
    description: 'Dev command number 13',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev13 command in the Dev category.' });
    }
};