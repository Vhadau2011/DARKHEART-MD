module.exports = {
    name: 'mods36',
    description: 'MODS command number 36',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the mods36 command in the MODS category.' });
    }
};