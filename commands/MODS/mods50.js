module.exports = {
    name: 'mods50',
    description: 'MODS command number 50',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the mods50 command in the MODS category.' });
    }
};