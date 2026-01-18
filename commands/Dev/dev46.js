module.exports = {
    name: 'dev46',
    description: 'Dev command number 46',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev46 command in the Dev category.' });
    }
};