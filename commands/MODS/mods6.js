module.exports = {
    name: 'mods6',
    description: 'MODS command number 6',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the mods6 command in the MODS category.' });
    }
};