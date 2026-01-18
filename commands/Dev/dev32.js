module.exports = {
    name: 'dev32',
    description: 'Dev command number 32',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev32 command in the Dev category.' });
    }
};