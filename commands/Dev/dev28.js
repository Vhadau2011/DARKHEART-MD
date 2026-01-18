module.exports = {
    name: 'dev28',
    description: 'Dev command number 28',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev28 command in the Dev category.' });
    }
};