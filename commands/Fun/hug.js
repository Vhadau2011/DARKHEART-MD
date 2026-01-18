module.exports = {
    name: 'hug',
    description: 'Perform hug action',
    category: 'Fun',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the hug command in the Fun category. (Placeholder)' });
    }
};