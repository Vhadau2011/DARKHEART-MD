module.exports = {
    name: 'mods10',
    description: 'MODS command number 10',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the mods10 command in the MODS category.' });
    }
};