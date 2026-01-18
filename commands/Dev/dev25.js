module.exports = {
    name: 'dev25',
    description: 'Dev command number 25',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev25 command in the Dev category.' });
    }
};