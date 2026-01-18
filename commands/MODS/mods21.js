module.exports = {
    name: 'mods21',
    description: 'MODS command number 21',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the mods21 command in the MODS category.' });
    }
};