module.exports = {
    name: 'mods18',
    description: 'Functional MODS command: mods18',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'MODS command mods18 executed.' });
    }
};