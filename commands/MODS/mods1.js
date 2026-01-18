module.exports = {
    name: 'mods1',
    description: 'Functional MODS command: mods1',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'MODS command mods1 executed.' });
    }
};