module.exports = {
    name: 'demote',
    description: 'Demote an admin to member',
    category: 'Admin',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the demote command in the Admin category. (Placeholder)' });
    }
};