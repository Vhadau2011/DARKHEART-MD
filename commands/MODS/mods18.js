module.exports = {
    name: 'mods18',
    description: 'MODS command number 18',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the mods18 command in the MODS category.' });
    }
};