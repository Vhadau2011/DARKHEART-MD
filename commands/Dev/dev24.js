module.exports = {
    name: 'dev24',
    description: 'Dev command number 24',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev24 command in the Dev category.' });
    }
};