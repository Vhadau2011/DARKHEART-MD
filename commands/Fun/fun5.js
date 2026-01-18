module.exports = {
    name: 'fun5',
    description: 'Functional Fun command: fun5',
    category: 'Fun',
    async execute(sock, msg, args) {
        const target = msg.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || (args[0] ? args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : null);
        if (!target) return sock.sendMessage(msg.key.remoteJid, { text: 'Please tag someone to kick!' });
        await sock.sendMessage(msg.key.remoteJid, { text: `@${msg.key.participant.split('@')[0]} kicks @${target.split('@')[0]}!`, mentions: [msg.key.participant, target] });
    }
};