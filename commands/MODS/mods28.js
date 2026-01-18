module.exports = {
    name: 'mods28',
    description: 'MODS command number 28',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'This is the mods28 command in the MODS category.' });
    }
};