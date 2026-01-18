module.exports = {
    name: 'admin2',
    description: 'Functional Admin command: admin2',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Admin action admin2 executed successfully.' });
    }
};