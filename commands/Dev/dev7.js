module.exports = {
    name: 'dev7',
    description: 'Dev command number 7',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev7 command in the Dev category.' });
    }
};