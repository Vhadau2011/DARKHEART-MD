module.exports = {
    name: 'mods37',
    description: 'MODS command number 37',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the mods37 command in the MODS category.' });
    }
};