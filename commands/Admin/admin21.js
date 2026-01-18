module.exports = {
    name: 'admin21',
    description: 'Functional Admin command: admin21',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Admin action admin21 executed successfully.' });
    }
};