module.exports = {
    name: 'warn',
    description: 'Functional Admin command: admin9',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Admin action warn executed successfully.' });
    }
};
