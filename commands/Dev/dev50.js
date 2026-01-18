module.exports = {
    name: 'dev50',
    description: 'Dev command number 50',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev50 command in the Dev category.' });
    }
};