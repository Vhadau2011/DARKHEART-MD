module.exports = {
    name: 'mods27',
    description: 'MODS command number 27',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the mods27 command in the MODS category.' });
    }
};