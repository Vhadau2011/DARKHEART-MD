module.exports = {
    name: 'dev3',
    description: 'Dev command number 3',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev3 command in the Dev category.' });
    }
};