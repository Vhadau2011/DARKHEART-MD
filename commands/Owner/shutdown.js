module.exports = {
    name: 'shutdown',
    description: 'Turn off the bot',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the shutdown command in the Owner category. (Placeholder)' });
    }
};