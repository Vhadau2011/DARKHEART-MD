module.exports = {
    name: 'dev48',
    description: 'Dev command number 48',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev48 command in the Dev category.' });
    }
};