const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason
} = require("@whiskeysockets/baileys")

const Pino = require("pino")
const fs = require("fs")

async function connectBot() {
    // Create session folder if missing
    if (!fs.existsSync("./session")) {
        fs.mkdirSync("./session")
    }

    const { state, saveCreds } = await useMultiFileAuthState("./session")

    const sock = makeWASocket({
        auth: state,
        logger: Pino({ level: "silent" }),
        printQRInTerminal: true,
        browser: ["DARKHEART-MD", "Chrome", "1.0.0"]
    })

    // Save credentials
    sock.ev.on("creds.update", saveCreds)

    // Handle disconnects
    sock.ev.on("connection.update", (update) => {
        const { connection, lastDisconnect } = update

        if (connection === "close") {
            const reason = lastDisconnect?.error?.output?.statusCode

            if (reason !== DisconnectReason.loggedOut) {
                console.log("🔄 Reconnecting to WhatsApp...")
                connectBot()
            } else {
                console.log("❌ Logged out. Delete session folder and rescan QR.")
            }
        }

        if (connection === "open") {
            console.log("✅ DARKHEART-MD connected to WhatsApp")
        }
    })

    return sock
}

module.exports = connectBot
