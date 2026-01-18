const fs = require('fs');
const path = require('path');

module.exports = {
    name: 'menu',
    description: 'Display the bot command menu',
    category: 'general',
    async execute(sock, msg, args, { prefix, store }) {
        const from = msg.key.remoteJid;
        const botName = process.env.BOT_NAME || 'BLUEBOT-MD';
        const ownerName = process.env.OWNER_NAME || 'mudau_t';
        const menuImage = process.env.MENU_IMAGE;

        // Group commands by category
        const categories = {};
        const commandFiles = [];
        
        // This is a bit of a hack to get all commands since they are stored in a Map in index.js
        // In a real scenario, we'd pass the commands map in the context
        // For now, let's assume we can access the commands from the global scope or re-read them
        // Since I can't easily access the Map from index.js here without refactoring, 
        // I will implement a logic to scan the directories.
        
        const baseDir = path.join(__dirname, '..');
        const dirNames = fs.readdirSync(baseDir);
        
        dirNames.forEach(dir => {
            const dirPath = path.join(baseDir, dir);
            if (fs.lstatSync(dirPath).isDirectory()) {
                const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.js'));
                categories[dir] = files.map(f => f.replace('.js', ''));
            }
        });

        let menuText = `*╭───「 ${botName} 」───╮*\n`;
        menuText += `*│* 👤 *Owner:* ${ownerName}\n`;
        menuText += `*│* ⌨️ *Prefix:* ${prefix}\n`;
        menuText += `*╰──────────────────╯*\n\n`;

        for (const category in categories) {
            if (categories[category].length > 0) {
                menuText += `*┌───「 ${category.toUpperCase()} 」───┐*\n`;
                categories[category].forEach(cmd => {
                    menuText += `*│* ${prefix}${cmd}\n`;
                });
                menuText += `*└──────────────────┘*\n\n`;
            }
        }

        menuText += `_Powered by mudau_t_`;

        if (menuImage) {
            await sock.sendMessage(from, { 
                image: { url: menuImage }, 
                caption: menuText 
            });
        } else {
            await sock.sendMessage(from, { text: menuText });
        }
    }
};
