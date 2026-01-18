module.exports = {
    name: 'setownername',
    description: 'Change the owner name',
    category: 'Owner',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the setownername command in the Owner category. (Placeholder)' });
    }
};