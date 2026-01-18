module.exports = {
    name: 'mods48',
    description: 'MODS command number 48',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the mods48 command in the MODS category.' });
    }
};