module.exports = {
    name: 'dev34',
    description: 'Dev command number 34',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev34 command in the Dev category.' });
    }
};