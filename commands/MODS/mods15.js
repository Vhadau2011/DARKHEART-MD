module.exports = {
    name: 'mods15',
    description: 'MODS command number 15',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the mods15 command in the MODS category.' });
    }
};