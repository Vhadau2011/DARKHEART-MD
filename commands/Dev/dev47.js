module.exports = {
    name: 'dev47',
    description: 'Dev command number 47',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev47 command in the Dev category.' });
    }
};