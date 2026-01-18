module.exports = {
    name: 'dev11',
    description: 'Dev command number 11',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev11 command in the Dev category.' });
    }
};