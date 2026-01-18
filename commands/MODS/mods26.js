module.exports = {
    name: 'mods26',
    description: 'Functional MODS command: mods26',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'MODS command mods26 executed.' });
    }
};