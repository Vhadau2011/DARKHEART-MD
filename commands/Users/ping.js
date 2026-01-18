module.exports = {
    name: 'ping',
    description: 'Check bot response time',
    async execute(sock, msg, args) {
        const start = Date.now();
        await sock.sendMessage(msg.key.remoteJid, { text: 'Pinging...' });
        const end = Date.now();
        await sock.sendMessage(msg.key.remoteJid, { text: `Pong! Latency: ${end - start}ms` });
    }
};
