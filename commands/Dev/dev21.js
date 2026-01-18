module.exports = {
    name: 'dev21',
    description: 'Dev command number 21',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev21 command in the Dev category.' });
    }
};