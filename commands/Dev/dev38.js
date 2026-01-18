module.exports = {
    name: 'dev38',
    description: 'Dev command number 38',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev38 command in the Dev category.' });
    }
};