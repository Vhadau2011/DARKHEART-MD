module.exports = {
    name: 'dev6',
    description: 'Dev command number 6',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev6 command in the Dev category.' });
    }
};