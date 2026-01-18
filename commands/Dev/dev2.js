module.exports = {
    name: 'dev2',
    description: 'Dev command number 2',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev2 command in the Dev category.' });
    }
};