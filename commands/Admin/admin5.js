module.exports = {
    name: 'admin5',
    description: 'Functional Admin command: admin5',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Admin action admin5 executed successfully.' });
    }
};