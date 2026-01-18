module.exports = {
    name: 'mods13',
    description: 'MODS command number 13',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the mods13 command in the MODS category.' });
    }
};