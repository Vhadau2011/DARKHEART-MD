module.exports = {
    name: 'mods1',
    description: 'MODS command number 1',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the mods1 command in the MODS category.' });
    }
};