module.exports = {
    name: 'warn',
    description: 'Warn a user',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'User has been warned. (Placeholder)' });
    }
};
