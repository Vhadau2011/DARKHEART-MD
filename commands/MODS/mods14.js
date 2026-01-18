module.exports = {
    name: 'mods14',
    description: 'MODS command number 14',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the mods14 command in the MODS category.' });
    }
};