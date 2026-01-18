module.exports = {
    name: 'mods46',
    description: 'MODS command number 46',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the mods46 command in the MODS category.' });
    }
};