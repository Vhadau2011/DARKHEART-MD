module.exports = {
    name: 'mods25',
    description: 'Functional MODS command: mods25',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'MODS command mods25 executed.' });
    }
};