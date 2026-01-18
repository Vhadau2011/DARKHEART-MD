module.exports = {
    name: 'pat',
    description: 'Perform pat action',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the pat command in the Fun category. (Placeholder)' });
    }
};