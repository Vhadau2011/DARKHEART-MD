module.exports = {
    name: 'dev12',
    description: 'Dev command number 12',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev12 command in the Dev category.' });
    }
};