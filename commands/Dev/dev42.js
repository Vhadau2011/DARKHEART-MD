module.exports = {
    name: 'dev42',
    description: 'Dev command number 42',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev42 command in the Dev category.' });
    }
};