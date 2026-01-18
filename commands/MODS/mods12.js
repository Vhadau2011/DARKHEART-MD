module.exports = {
    name: 'mods12',
    description: 'MODS command number 12',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the mods12 command in the MODS category.' });
    }
};