module.exports = {
    name: 'dev40',
    description: 'Dev command number 40',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev40 command in the Dev category.' });
    }
};