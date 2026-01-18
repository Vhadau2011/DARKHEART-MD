module.exports = {
    name: 'lick',
    description: 'Perform lick action',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the lick command in the Fun category. (Placeholder)' });
    }
};