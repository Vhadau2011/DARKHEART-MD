 require("dotenv").config()

const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys")
const Pino = require("pino")
const fs = require("fs")

require("./core/REPO_RULES")
require("./core/BACKUP")

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState("session")

    const sock = makeWASocket({
        auth: state,
        logger: Pino({ level: "silent" }),
        printQRInTerminal: true
    })

    sock.ev.on("creds.update", saveCreds)

    sock.ev.on("messages.upsert", async ({ messages }) => {
        const msg = messages[0]
        if (!msg.message || msg.key.fromMe) return

        const text =
            msg.message.conversation ||
            msg.message.extendedTextMessage?.text ||
            ""

        if (!text.startsWith(process.env.PREFIX)) return

        if (text === `${process.env.PREFIX}menu`) {
            require("./commands/-")(sock, msg)
        }
    })
}

startBot()
