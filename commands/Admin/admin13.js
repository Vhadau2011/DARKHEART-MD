module.exports = {
    name: 'admin13',
    description: 'Functional Admin command: admin13',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Admin action admin13 executed successfully.' });
    }
};