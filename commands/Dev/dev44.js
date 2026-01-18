module.exports = {
    name: 'dev44',
    description: 'Dev command number 44',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev44 command in the Dev category.' });
    }
};