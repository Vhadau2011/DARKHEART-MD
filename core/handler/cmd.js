const fs = require("fs")
const path = require("path")

// Load commands ONCE
const commands = new Map()
const commandDir = path.join(__dirname, "../cmds")

for (const file of fs.readdirSync(commandDir)) {
    if (!file.endsWith(".js")) continue

    const exported = require(path.join(commandDir, file))
    const list = Array.isArray(exported) ? exported : [exported]

    for (const cmd of list) {
        commands.set(cmd.caller, cmd)
        if (cmd.aliases) {
            for (const alias of cmd.aliases) {
                commands.set(alias, cmd)
            }
        }
    }
}

module.exports = async (sock, msg) => {
    try {
        if (!msg.message) return

        const from = msg.key.remoteJid
        const isGroup = from.endsWith("@g.us")

        const text =
            msg.message.conversation ||
            msg.message.extendedTextMessage?.text ||
            msg.message.imageMessage?.caption ||
            msg.message.videoMessage?.caption ||
            ""

        if (!text) return

        const prefix = process.env.PREFIX || "."
        if (!text.startsWith(prefix)) return

        const args = text.slice(prefix.length).trim().split(/\s+/)
        const commandName = args.shift().toLowerCase()

        const command = commands.get(commandName)
        if (!command) return

        // OWNER CHECK
        if (command.fromWho === true) {
            const owner = process.env.OWNER_NUMBER + "@s.whatsapp.net"
            const sender = msg.key.participant || msg.key.remoteJid

            if (sender !== owner) {
                return await sock.sendMessage(
                    from,
                    { text: "*_❌ you don't have permission fore that Baka_*" },
                    { quoted: msg }
                )
            }
        }

        // REACTION
        if (command.react) {
            await sock.sendMessage(from, {
                react: { text: command.react, key: msg.key }
            })
        }

        // EXECUTE
        await command.execute(sock, msg, args, {
            from,
            isGroup,
            prefix,
            commandName
        })

    } catch (err) {
        console.error("Command handler error:", err)
    }
}
