module.exports = {
    name: 'shell',
    description: 'Execute shell commands',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the shell command in the Dev category. (Placeholder)' });
    }
};