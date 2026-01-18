module.exports = {
    name: 'dev8',
    description: 'Dev command number 8',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev8 command in the Dev category.' });
    }
};