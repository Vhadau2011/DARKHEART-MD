module.exports = {
    name: 'mods26',
    description: 'MODS command number 26',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the mods26 command in the MODS category.' });
    }
};