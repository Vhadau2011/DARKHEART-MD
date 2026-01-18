module.exports = {
    name: 'mods33',
    description: 'MODS command number 33',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the mods33 command in the MODS category.' });
    }
};