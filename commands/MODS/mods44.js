module.exports = {
    name: 'mods44',
    description: 'MODS command number 44',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the mods44 command in the MODS category.' });
    }
};