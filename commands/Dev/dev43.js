module.exports = {
    name: 'dev43',
    description: 'Dev command number 43',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev43 command in the Dev category.' });
    }
};