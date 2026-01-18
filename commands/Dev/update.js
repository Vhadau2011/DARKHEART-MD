const { exec } = require('child_process');

module.exports = {
    name: 'update',
    description: 'Pull the latest version from the official repo',
    async execute(sock, msg, args) {
        const from = msg.key.remoteJid;
        await sock.sendMessage(from, { text: 'Checking for updates...' });

        exec('git pull', (err, stdout, stderr) => {
            if (err) {
                return sock.sendMessage(from, { text: `Update failed: ${err.message}` });
            }
            if (stdout.includes('Already up to date.')) {
                return sock.sendMessage(from, { text: 'The bot is already up to date.' });
            }
            sock.sendMessage(from, { text: `Update successful!\n\n${stdout}\nRestarting...` });
            process.exit(); // Assuming a process manager like pm2 will restart it
        });
    }
};
