module.exports = {
    name: 'ping',
    description: 'Check latency',
    category: 'general',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the ping command in the general category. (Placeholder)' });
    }
};