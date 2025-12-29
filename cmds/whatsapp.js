/*
 * Copyright (c) 2025 YourName
 * This file is part of the bot project.
 * You may use, copy, modify, and distribute this file,
 * but do not claim it as your own or remove this notice.
 */

module.exports = {
    caller: "repo",
    aliases: ["project", "source", "about"],
    react: "📦",
    fromWho: true, // anyone can use

    async execute(sock, msg) {
        const from = msg.key.remoteJid

        const text = `
📦 *Project / Repo Info* 📦

🔗 *Repo Link:* https://github.com/Vhadau2011/BLUEBOT-MD 
📝 *Description:* This bot is a WhatsApp multi-feature bot with admin commands, events, anti-link, and activity tracking.
👑 *Owner:* @${process.env.OWNER_NUMBER}
🤝 *Team:* ༺░▒▓█♜đΔɍꝁ ħɇΔɍŧ's♜░▒▓█⨺⃝Х⨺⃝Х̶̿̀͊̍̈́͑̓̈́̃̆́ ⨺⃝Х̶̿̀͊̍̈́͑̓̈́̃̆́ ⁶⁶⁶

✨ Feel free to contribute or report issues on the official channel and community!
        `

        await sock.sendMessage(from, { text, mentions: [process.env.OWNER_NUMBER + "@s.whatsapp.net"] }, { quoted: msg })
    }
}

