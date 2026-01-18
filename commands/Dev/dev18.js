module.exports = {
    name: 'dev18',
    description: 'Dev command number 18',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev18 command in the Dev category.' });
    }
};