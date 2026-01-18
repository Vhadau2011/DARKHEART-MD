module.exports = {
    name: 'test',
    description: 'Run a diagnostic test',
    category: 'Dev',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the test command in the Dev category. (Placeholder)' });
    }
};