module.exports = {
    name: 'mods2',
    description: 'MODS command number 2',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the mods2 command in the MODS category.' });
    }
};