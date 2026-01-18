module.exports = {
    name: 'mods4',
    description: 'MODS command number 4',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the mods4 command in the MODS category.' });
    }
};