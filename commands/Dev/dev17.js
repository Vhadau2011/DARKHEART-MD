module.exports = {
    name: 'dev17',
    description: 'Dev command number 17',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev17 command in the Dev category.' });
    }
};