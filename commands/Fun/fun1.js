module.exports = {
    name: 'fun1',
    description: 'Functional Fun command: fun1',
    category: 'Fun',
    async execute(sock, msg, args) {
        const target = msg.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || (args[0] ? args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : null);
        if (!target) return sock.sendMessage(msg.key.remoteJid, { text: 'Please tag someone to slap!' });
        await sock.sendMessage(msg.key.remoteJid, { text: `@${msg.key.participant.split('@')[0]} slaps @${target.split('@')[0]}!`, mentions: [msg.key.participant, target] });
    }
};