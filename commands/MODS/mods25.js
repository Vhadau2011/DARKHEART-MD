module.exports = {
    name: 'mods25',
    description: 'MODS command number 25',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the mods25 command in the MODS category.' });
    }
};