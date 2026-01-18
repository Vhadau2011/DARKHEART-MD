module.exports = {
    name: 'dev15',
    description: 'Dev command number 15',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev15 command in the Dev category.' });
    }
};