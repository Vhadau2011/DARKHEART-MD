module.exports = {
    name: 'dev5',
    description: 'Dev command number 5',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev5 command in the Dev category.' });
    }
};