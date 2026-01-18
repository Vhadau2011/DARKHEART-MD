module.exports = {
    name: 'admin3',
    description: 'Functional Admin command: admin3',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Admin action admin3 executed successfully.' });
    }
};