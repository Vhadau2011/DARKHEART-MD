module.exports = {
    name: 'dev14',
    description: 'Dev command number 14',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev14 command in the Dev category.' });
    }
};