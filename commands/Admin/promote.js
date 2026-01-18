module.exports = {
    name: 'promote',
    description: 'Functional Admin command: promote',
    category: 'Admin',
    async execute(sock, msg, args) {
        const from = msg.key.remoteJid;
        const target = msg.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
        if (!target) return sock.sendMessage(from, { text: 'Tag someone to promote.' });
        await sock.groupParticipantsUpdate(from, [target], 'promote');
        await sock.sendMessage(from, { text: 'User promoted to admin.' });
    }
};