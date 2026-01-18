module.exports = {
    name: 'gay',
    description: 'Check how gay someone is',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the gay command in the Fun category. (Placeholder)' });
    }
};