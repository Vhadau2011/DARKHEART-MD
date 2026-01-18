module.exports = {
    name: 'dev1',
    description: 'Dev command number 1',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev1 command in the Dev category.' });
    }
};