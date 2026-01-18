module.exports = {
    name: 'mods3',
    description: 'MODS command number 3',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the mods3 command in the MODS category.' });
    }
};