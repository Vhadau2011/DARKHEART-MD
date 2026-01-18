module.exports = {
    name: 'dev30',
    description: 'Dev command number 30',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev30 command in the Dev category.' });
    }
};