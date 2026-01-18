module.exports = {
    name: 'eval',
    description: 'Evaluate javascript code',
    async execute(sock, msg, args) {
        if (!args.length) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide code to evaluate.' });
        try {
            let evaled = eval(args.join(' '));
            if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
            await sock.sendMessage(msg.key.remoteJid, { text: evaled });
        } catch (err) {
            await sock.sendMessage(msg.key.remoteJid, { text: err.message });
        }
    }
};
