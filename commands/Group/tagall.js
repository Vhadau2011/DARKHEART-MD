module.exports = {
    name: 'tagall',
    description: 'Tag all members in the group',
    async execute(sock, msg, args) {
        const from = msg.key.remoteJid;
        if (!from.endsWith('@g.us')) return sock.sendMessage(from, { text: 'This command can only be used in groups.' });
        const metadata = await sock.groupMetadata(from);
        const participants = metadata.participants;
        let text = `*Tag All*\n\n`;
        for (let mem of participants) {
            text += `@${mem.id.split('@')[0]}\n`;
        }
        await sock.sendMessage(from, { text, mentions: participants.map(a => a.id) });
    }
};
