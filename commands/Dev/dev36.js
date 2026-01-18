module.exports = {
    name: 'dev36',
    description: 'Dev command number 36',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev36 command in the Dev category.' });
    }
};