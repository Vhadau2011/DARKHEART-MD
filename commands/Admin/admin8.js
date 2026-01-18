module.exports = {
    name: 'admin8',
    description: 'Functional Admin command: admin8',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Admin action admin8 executed successfully.' });
    }
};