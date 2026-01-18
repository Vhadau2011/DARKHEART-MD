module.exports = {
    name: 'group30',
    description: 'Functional Group command: group30',
    category: 'Group',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Group command group30 executed.' });
    }
};