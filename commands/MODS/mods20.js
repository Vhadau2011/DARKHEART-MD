module.exports = {
    name: 'mods20',
    description: 'MODS command number 20',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the mods20 command in the MODS category.' });
    }
};