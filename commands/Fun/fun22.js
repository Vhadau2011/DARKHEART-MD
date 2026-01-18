module.exports = {
    name: 'fun22',
    description: 'Functional Fun command: fun22',
    category: 'Fun',
    async execute(sock, msg, args) {
        const responses = ['Yes', 'No', 'Maybe', 'Definitely', 'Never', 'Ask again later'];
        const result = responses[Math.floor(Math.random() * responses.length)];
        await sock.sendMessage(msg.key.remoteJid, { text: `Fun Result for fun22: ${result}` });
    }
};