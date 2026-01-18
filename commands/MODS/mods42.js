module.exports = {
    name: 'mods42',
    description: 'MODS command number 42',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the mods42 command in the MODS category.' });
    }
};