module.exports = {
    caller: "kick",
    aliases: [],
    react: "👢",
    fromWho: false, // Not owner-only, just group admin

    async execute(sock, msg, args, { from, isGroup }) {
        if (!isGroup) {
            return sock.sendMessage(
                from,
                { text: "*_❌ This command only works in groups._*" },
                { quoted: msg }
            )
        }

        // Get sender and mentioned user
        const sender = msg.key.participant
        const mentioned = msg.message.extendedTextMessage?.contextInfo?.mentionedJid

        if (!mentioned || !mentioned[0]) {
            return sock.sendMessage(
                from,
                { text: "*_❌ You must mention at least one user to kick._*" },
                { quoted: msg }
            )
        }

        // Get group metadata to check admins
        const group = await sock.groupMetadata(from)
        const admins = group.participants
            .filter(p => p.admin)
            .map(p => p.id)

        // Check if sender is admin
        if (!admins.includes(sender)) {
            return sock.sendMessage(
                from,
                { text: "*_❌ Only group admins can use this command baka._*" },
                { quoted: msg }
            )
        }

        // Check if bot is admin
        const botId = sock.user.id
        if (!admins.includes(botId)) {
            return sock.sendMessage(
                from,
                { text: "*_❌ I need to be an admin to kick someone baka._*" },
                { quoted: msg }
            )
        }

        // Kick mentioned users
        await sock.groupParticipantsUpdate(from, mentioned, "remove")

        await sock.sendMessage(
            from,
            { text: `✅ Successfully kicked: ${mentioned.map(u => "@" + u.split("@")[0]).join(", ")}` },
            { quoted: msg, mentions: mentioned }
        )
    }
}

module.exports = {
    caller: "add",
    aliases: [],
    react: "➕",
    fromWho: false, // Not owner-only, just group admin

    async execute(sock, msg, args, { from, isGroup }) {
        if (!isGroup) {
            return sock.sendMessage(
                from,
                { text: "❌ This command only works in groups." },
                { quoted: msg }
            )
        }

        // Check if sender is admin
        const sender = msg.key.participant
        const group = await sock.groupMetadata(from)
        const admins = group.participants.filter(p => p.admin).map(p => p.id)

        if (!admins.includes(sender)) {
            return sock.sendMessage(
                from,
                { text: "❌ Only group admins can add someone." },
                { quoted: msg }
            )
        }

        // Check if bot is admin
        const botId = sock.user.id
        if (!admins.includes(botId)) {
            return sock.sendMessage(
                from,
                { text: "❌ I need to be an admin to add someone." },
                { quoted: msg }
            )
        }

        // Check if phone number is provided
        if (!args[0]) {
            return sock.sendMessage(
                from,
                { text: "❌ Please provide a phone number. Example: .add 27812345678" },
                { quoted: msg }
            )
        }

        const userId = args[0].replace(/\D/g, "") + "@s.whatsapp.net"

        try {
            await sock.groupParticipantsUpdate(from, [userId], "add")
            await sock.sendMessage(
                from,
                { text: `✅ Successfully added: @${args[0]}` },
                { quoted: msg, mentions: [userId] }
            )
        } catch (err) {
            await sock.sendMessage(
                from,
                { text: `❌ Could not add @${args[0]}. Maybe they have privacy settings enabled.` },
                { quoted: msg }
            )
        }
    }
}

module.exports = {
    caller: "promote",
    aliases: [],
    react: "📈",
    fromWho: false, // Not owner-only, just group admin

    async execute(sock, msg, args, { from, isGroup }) {
        if (!isGroup) {
            return sock.sendMessage(
                from,
                { text: "❌ This command only works in groups." },
                { quoted: msg }
            )
        }

        // Get sender and mentioned user
        const sender = msg.key.participant
        const mentioned = msg.message.extendedTextMessage?.contextInfo?.mentionedJid

        if (!mentioned || !mentioned[0]) {
            return sock.sendMessage(
                from,
                { text: "❌ You must mention at least one user to promote." },
                { quoted: msg }
            )
        }

        // Get group metadata
        const group = await sock.groupMetadata(from)
        const admins = group.participants
            .filter(p => p.admin)
            .map(p => p.id)

        // Check if sender is admin
        if (!admins.includes(sender)) {
            return sock.sendMessage(
                from,
                { text: "❌ Only group admins can use this command." },
                { quoted: msg }
            )
        }

        // Check if bot is admin
        const botId = sock.user.id
        if (!admins.includes(botId)) {
            return sock.sendMessage(
                from,
                { text: "❌ I need to be an admin to promote someone." },
                { quoted: msg }
            )
        }

        // Promote mentioned users
        await sock.groupParticipantsUpdate(from, mentioned, "promote")

        await sock.sendMessage(
            from,
            { text: `✅ Successfully promoted: ${mentioned.map(u => "@" + u.split("@")[0]).join(", ")}` },
            { quoted: msg, mentions: mentioned }
        )
    }
}

module.exports = {
    caller: "demote",
    aliases: [],
    react: "📉",
    fromWho: false, // Not owner-only, just group admin

    async execute(sock, msg, args, { from, isGroup }) {
        if (!isGroup) {
            return sock.sendMessage(
                from,
                { text: "❌ This command only works in groups." },
                { quoted: msg }
            )
        }

        // Get sender and mentioned user
        const sender = msg.key.participant
        const mentioned = msg.message.extendedTextMessage?.contextInfo?.mentionedJid

        if (!mentioned || !mentioned[0]) {
            return sock.sendMessage(
                from,
                { text: "❌ You must mention at least one user to demote." },
                { quoted: msg }
            )
        }

        // Get group metadata
        const group = await sock.groupMetadata(from)
        const admins = group.participants
            .filter(p => p.admin)
            .map(p => p.id)

        // Check if sender is admin
        if (!admins.includes(sender)) {
            return sock.sendMessage(
                from,
                { text: "❌ Only group admins can use this command." },
                { quoted: msg }
            )
        }

        // Check if bot is admin
        const botId = sock.user.id
        if (!admins.includes(botId)) {
            return sock.sendMessage(
                from,
                { text: "❌ I need to be an admin to demote someone." },
                { quoted: msg }
            )
        }

        // Demote mentioned users
        await sock.groupParticipantsUpdate(from, mentioned, "demote")

        await sock.sendMessage(
            from,
            { text: `✅ Successfully demoted: ${mentioned.map(u => "@" + u.split("@")[0]).join(", ")}` },
            { quoted: msg, mentions: mentioned }
        )
    }
}

module.exports = {
    caller: "setname",
    aliases: ["rename"],
    react: "✏️",
    fromWho: false, // Not owner-only, just group admin

    async execute(sock, msg, args, { from, isGroup }) {
        if (!isGroup) {
            return sock.sendMessage(
                from,
                { text: "❌ This command only works in groups." },
                { quoted: msg }
            )
        }

        // Get sender and check admin
        const sender = msg.key.participant
        const group = await sock.groupMetadata(from)
        const admins = group.participants.filter(p => p.admin).map(p => p.id)

        if (!admins.includes(sender)) {
            return sock.sendMessage(
                from,
                { text: "❌ Only group admins can use this command." },
                { quoted: msg }
            )
        }

        // Check if bot is admin
        const botId = sock.user.id
        if (!admins.includes(botId)) {
            return sock.sendMessage(
                from,
                { text: "❌ I need to be an admin to change the group name." },
                { quoted: msg }
            )
        }

        // Check if new name is provided
        const newName = args.join(" ")
        if (!newName) {
            return sock.sendMessage(
                from,
                { text: "❌ Please provide a new group name. Example: .setname My Group" },
                { quoted: msg }
            )
        }

        // Update group name
        await sock.groupUpdateSubject(from, newName)

        await sock.sendMessage(
            from,
            { text: `✅ Group name successfully changed to: ${newName}` },
            { quoted: msg }
        )
    }
}

module.exports = {
    caller: "setdesc",
    aliases: ["desc", "description"],
    react: "📝",
    fromWho: false, // Not owner-only, just group admin

    async execute(sock, msg, args, { from, isGroup }) {
        if (!isGroup) {
            return sock.sendMessage(
                from,
                { text: "❌ This command only works in groups." },
                { quoted: msg }
            )
        }

        // Get sender and check admin
        const sender = msg.key.participant
        const group = await sock.groupMetadata(from)
        const admins = group.participants.filter(p => p.admin).map(p => p.id)

        if (!admins.includes(sender)) {
            return sock.sendMessage(
                from,
                { text: "❌ Only group admins can use this command." },
                { quoted: msg }
            )
        }

        // Check if bot is admin
        const botId = sock.user.id
        if (!admins.includes(botId)) {
            return sock.sendMessage(
                from,
                { text: "❌ I need to be an admin to change the group description." },
                { quoted: msg }
            )
        }

        // Check if new description is provided
        const newDesc = args.join(" ")
        if (!newDesc) {
            return sock.sendMessage(
                from,
                { text: "❌ Please provide a new group description. Example: .setdesc Welcome to my group" },
                { quoted: msg }
            )
        }

        // Update group description
        await sock.groupUpdateDescription(from, newDesc)

        await sock.sendMessage(
            from,
            { text: `✅ Group description successfully changed.` },
            { quoted: msg }
        )
    }
}

module.exports = {
    caller: "setgpp",
    aliases: ["setpic", "gpp"],
    react: "🖼️",
    fromWho: false, // Not owner-only, just group admin

    async execute(sock, msg, args, { from, isGroup }) {
        if (!isGroup) {
            return sock.sendMessage(
                from,
                { text: "❌ This command only works in groups." },
                { quoted: msg }
            )
        }

        // Check if sender is admin
        const sender = msg.key.participant
        const group = await sock.groupMetadata(from)
        const admins = group.participants.filter(p => p.admin).map(p => p.id)

        if (!admins.includes(sender)) {
            return sock.sendMessage(
                from,
                { text: "❌ Only group admins can change the group picture." },
                { quoted: msg }
            )
        }

        // Check if bot is admin
        const botId = sock.user.id
        if (!admins.includes(botId)) {
            return sock.sendMessage(
                from,
                { text: "❌ I need to be an admin to change the group picture." },
                { quoted: msg }
            )
        }

        // Get image from message or quoted message
        let buffer
        if (msg.message.imageMessage) {
            buffer = await sock.downloadMediaMessage(msg)
        } else if (msg.message.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage) {
            const quoted = msg.message.extendedTextMessage.contextInfo.quotedMessage
            buffer = await sock.downloadMediaMessage({ message: quoted })
        } else {
            return sock.sendMessage(
                from,
                { text: "❌ Please send an image with the command or reply to an image." },
                { quoted: msg }
            )
        }

        // Set group profile picture
        try {
            await sock.updateProfilePicture(from, buffer)
            await sock.sendMessage(
                from,
                { text: "✅ Group profile picture updated successfully." },
                { quoted: msg }
            )
        } catch (err) {
            await sock.sendMessage(
                from,
                { text: "❌ Failed to update group picture. Make sure I am an admin." },
                { quoted: msg }
            )
        }
    }
}

module.exports = {
    caller: "ginfo",
    aliases: ["groupinfo", "gi"],
    react: "ℹ️",
    fromWho: false, // usable by anyone

    async execute(sock, msg, args, { from, isGroup }) {
        if (!isGroup) {
            return sock.sendMessage(
                from,
                { text: "❌ This command only works in groups." },
                { quoted: msg }
            )
        }

        try {
            const group = await sock.groupMetadata(from)

            // Get group picture (if available)
            let gppBuffer
            try {
                gppBuffer = await sock.profilePictureUrl(from, "image")
                gppBuffer = await (await fetch(gppBuffer)).arrayBuffer()
                gppBuffer = Buffer.from(gppBuffer)
            } catch {
                gppBuffer = null // default if no picture
            }

            const groupName = group.subject
            const groupId = group.id
            const owner = group.owner || "Unknown"
            const memberCount = group.participants.length
            const admins = group.participants
                .filter(p => p.admin)
                .map(p => "@" + p.id.split("@")[0])
                .join(", ") || "None"
            const description = group.desc || "No description"

            const caption = `
🎀 *Group Info* 🎀

💠 *Name:* ${groupName}
🆔 *ID:* ${groupId}
👑 *Owner:* @${owner.split("@")[0]}
👥 *Members:* ${memberCount}
🛡️ *Admins:* ${admins}
📝 *Description:* ${description}

✨ Stay active and enjoy the group! ✨
            `

            if (gppBuffer) {
                await sock.sendMessage(from, {
                    image: gppBuffer,
                    caption,
                    mentions: [owner, ...group.participants.map(p => p.id)]
                }, { quoted: msg })
            } else {
                await sock.sendMessage(from, {
                    text: caption,
                    mentions: [owner, ...group.participants.map(p => p.id)]
                }, { quoted: msg })
            }

        } catch (err) {
            await sock.sendMessage(
                from,
                { text: "❌ Failed to fetch group info." },
                { quoted: msg }
            )
            console.error(err)
        }
    }
}

module.exports = {
    caller: "tagall",
    aliases: ["all", "everyone"],
    react: "📢",
    fromWho: false, // Not owner-only, just group admin

    async execute(sock, msg, args, { from, isGroup }) {
        if (!isGroup) {
            return sock.sendMessage(
                from,
                { text: "❌ This command only works in groups." },
                { quoted: msg }
            )
        }

        // Check if sender is admin
        const sender = msg.key.participant
        const group = await sock.groupMetadata(from)
        const admins = group.participants.filter(p => p.admin).map(p => p.id)

        if (!admins.includes(sender)) {
            return sock.sendMessage(
                from,
                { text: "❌ Only group admins can use this command." },
                { quoted: msg }
            )
        }

        const members = group.participants.map(p => p.id)
        const customText = args.join(" ") || "Attention everyone!"

        // Format message
        let text = `📢 *Tagging Everyone* 📢\n\n${customText}\n\n`
        members.forEach((u, i) => {
            text += `👤 @${u.split("@")[0]}\n`
        })

        await sock.sendMessage(
            from,
            { text, mentions: members },
            { quoted: msg }
        )
    }
}

// Map to track muted users per group
const mutedUsers = new Map() // key = groupId, value = Set of muted userIds

module.exports = {
    caller: "mute",
    aliases: [],
    react: "🔇",
    fromWho: false, // Not owner-only, just group admin

    async execute(sock, msg, args, { from, isGroup }) {
        if (!isGroup) return sock.sendMessage(from, { text: "❌ This command only works in groups." }, { quoted: msg })

        const sender = msg.key.participant
        const group = await sock.groupMetadata(from)
        const admins = group.participants.filter(p => p.admin).map(p => p.id)

        if (!admins.includes(sender)) return sock.sendMessage(from, { text: "❌ Only admins can mute users." }, { quoted: msg })

        const mentioned = msg.message.extendedTextMessage?.contextInfo?.mentionedJid
        if (!mentioned || !mentioned.length) return sock.sendMessage(from, { text: "❌ Mention at least one user to mute." }, { quoted: msg })

        // Initialize muted set for the group if not exists
        if (!mutedUsers.has(from)) mutedUsers.set(from, new Set())
        const groupMuted = mutedUsers.get(from)

        // Add users to muted set
        mentioned.forEach(user => groupMuted.add(user))

        await sock.sendMessage(from, {
            text: `🔇 Muted users: ${mentioned.map(u => "@" + u.split("@")[0]).join(", ")}`
        }, { quoted: msg, mentions: mentioned })
    },

    // Extra: function to check messages and delete from muted users
    checkMessage: async function(sock, msg) {
        if (!msg.key.remoteJid.endsWith("@g.us")) return // only groups
        const groupId = msg.key.remoteJid
        const sender = msg.key.participant

        const groupMuted = mutedUsers.get(groupId)
        if (groupMuted && groupMuted.has(sender)) {
            try {
                await sock.sendMessage(groupId, { delete: msg.key })
            } catch (err) {
                console.error("Failed to delete muted user's message:", err)
            }
        }
    }
}
