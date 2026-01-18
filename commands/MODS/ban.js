module.exports = {
    name: 'ban',
    description: 'Ban a user from using the bot',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the ban command in the MODS category. (Placeholder)' });
    }
};