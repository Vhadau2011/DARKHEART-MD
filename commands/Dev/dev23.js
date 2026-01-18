module.exports = {
    name: 'dev23',
    description: 'Dev command number 23',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev23 command in the Dev category.' });
    }
};