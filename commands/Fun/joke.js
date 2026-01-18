module.exports = {
    name: 'joke',
    description: 'Get a random joke',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Why did the developer go broke? Because he used up all his cache!' });
    }
};
