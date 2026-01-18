module.exports = {
    name: 'dev33',
    description: 'Dev command number 33',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev33 command in the Dev category.' });
    }
};