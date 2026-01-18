module.exports = {
    name: 'dev39',
    description: 'Dev command number 39',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev39 command in the Dev category.' });
    }
};