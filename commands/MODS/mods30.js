module.exports = {
    name: 'mods30',
    description: 'MODS command number 30',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the mods30 command in the MODS category.' });
    }
};