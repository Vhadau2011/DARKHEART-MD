module.exports = {
    name: 'dev9',
    description: 'Dev command number 9',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev9 command in the Dev category.' });
    }
};