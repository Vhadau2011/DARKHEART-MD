module.exports = {
    name: 'dev20',
    description: 'Dev command number 20',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the dev20 command in the Dev category.' });
    }
};