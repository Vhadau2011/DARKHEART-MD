module.exports = {
    name: 'mods8',
    description: 'MODS command number 8',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the mods8 command in the MODS category.' });
    }
};