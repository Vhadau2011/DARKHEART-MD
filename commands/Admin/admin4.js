module.exports = {
    name: 'admin4',
    description: 'Functional Admin command: admin4',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Admin action admin4 executed successfully.' });
    }
};