module.exports = {
    name: 'mods41',
    description: 'Functional MODS command: mods41',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'MODS command mods41 executed.' });
    }
};