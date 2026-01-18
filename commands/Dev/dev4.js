module.exports = {
    name: 'dev4',
    description: 'Dev command number 4',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev4 command in the Dev category.' });
    }
};