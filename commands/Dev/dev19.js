module.exports = {
    name: 'dev19',
    description: 'Dev command number 19',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev19 command in the Dev category.' });
    }
};