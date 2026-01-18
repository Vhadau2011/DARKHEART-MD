module.exports = {
    name: 'mods4',
    description: 'Functional MODS command: mods4',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'MODS command mods4 executed.' });
    }
};