const fs = require("fs")
const path = require("path")

module.exports = (sock) => {
    sock.ev.on("messages.upsert", async ({ messages, type }) => {
        if (type !== "notify") return

        const msg = messages[0]
        if (!msg.message || msg.key.fromMe) return

        const from = msg.key.remoteJid
        const isGroup = from.endsWith("@g.us")

        // Extract text message safely
        const text =
            msg.message.conversation ||
            msg.message.extendedTextMessage?.text ||
            msg.message.imageMessage?.caption ||
            msg.message.videoMessage?.caption ||
            ""

        if (!text) return

        const prefix = process.env.PREFIX
        if (!text.startsWith(prefix)) return

        const args = text.slice(prefix.length).trim().split(/\s+/)
        const commandName = args.shift().toLowerCase()

        // Load commands
        const commandPath = path.join(__dirname, "../commands")
        const commandFiles = fs.readdirSync(commandPath).filter(f => f.endsWith(".js"))

        for (const file of commandFiles) {
            const command = require(path.join(commandPath, file))

            if (
                command.name === commandName ||
                (command.aliases && command.aliases.includes(commandName))
            ) {
                try {
                    // Owner-only check
                    if (command.ownerOnly) {
                        const owner = process.env.OWNER_NUMBER + "@s.whatsapp.net"
                        if (msg.key.participant !== owner && msg.key.remoteJid !== owner) {
                            return sock.sendMessage(from, {
                                text: "❌ This command is owner-only."
                            }, { quoted: msg })
                        }
                    }

                    await command.execute(sock, msg, args, {
                        from,
                        isGroup,
                        text,
                        prefix
                    })
                } catch (err) {
                    console.error(err)
                    sock.sendMessage(from, {
                        text: "⚠️ Error executing command."
                    }, { quoted: msg })
                }
                break
            }
        }
    })
}
