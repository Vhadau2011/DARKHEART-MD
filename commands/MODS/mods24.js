module.exports = {
    name: 'mods24',
    description: 'MODS command number 24',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the mods24 command in the MODS category.' });
    }
};