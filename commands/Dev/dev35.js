module.exports = {
    name: 'dev35',
    description: 'Dev command number 35',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev35 command in the Dev category.' });
    }
};