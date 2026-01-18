module.exports = {
    name: 'mods5',
    description: 'MODS command number 5',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the mods5 command in the MODS category.' });
    }
};