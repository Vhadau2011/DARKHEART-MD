module.exports = {
    name: 'mods14',
    description: 'Functional MODS command: mods14',
    category: 'MODS',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: 'MODS command mods14 executed.' });
    }
};