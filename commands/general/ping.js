module.exports = {
    name: 'ping',
    description: 'Functional general command: ping',
    category: 'general',
    async execute(sock, msg, args) {
        const start = Date.now();
        await sock.sendMessage(msg.key.remoteJid, { text: 'Testing speed...' });
        const end = Date.now();
        await sock.sendMessage(msg.key.remoteJid, { text: `Latency: ${end - start}ms` });
    }
};