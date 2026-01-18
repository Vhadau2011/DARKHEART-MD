module.exports = {
    name: 'dev26',
    description: 'Dev command number 26',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev26 command in the Dev category.' });
    }
};