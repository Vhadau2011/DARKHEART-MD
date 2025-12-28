const axios = require("axios");
const { zokou } = require("../framework/zokou");

module.exports = {
    name: "waifu",
    aliases: [],
    ownerOnly: false,
    async execute(sock, msg, args, { from }) {
        try {
            const res = await axios.get("https://api.waifu.pics/sfw/waifu");
            await sock.sendMessage(from, { image: { url: res.data.url }, caption: "Here’s your waifu 😏" }, { quoted: msg });
        } catch (err) {
            console.error(err);
            await sock.sendMessage(from, { text: "Error retrieving waifu." }, { quoted: msg });
        }
    }
};const axios = require("axios");

module.exports = {
    name: "neko",
    aliases: [],
    ownerOnly: false,
    async execute(sock, msg, args, { from }) {
        try {
            const res = await axios.get("https://api.waifu.pics/sfw/neko");
            await sock.sendMessage(from, { image: { url: res.data.url }, caption: "Here’s a cute neko 😺" }, { quoted: msg });
        } catch (err) {
            console.error(err);
            await sock.sendMessage(from, { text: "Error retrieving neko." }, { quoted: msg });
        }
    }
};const axios = require("axios");

module.exports = {
    name: "loli",
    aliases: [],
    ownerOnly: false,
    async execute(sock, msg, args, { from }) {
        try {
            const res = await axios.get("https://api.waifu.pics/sfw/loli");
            await sock.sendMessage(from, { image: { url: res.data.url }, caption: "Cute loli 🦋" }, { quoted: msg });
        } catch (err) {
            console.error(err);
            await sock.sendMessage(from, { text: "Error retrieving loli." }, { quoted: msg });
        }
    }
};const axios = require("axios");
const fs = require("fs");

module.exports = {
    name: "cosplay",
    aliases: [],
    ownerOnly: false,
    async execute(sock, msg, args, { from }) {
        try {
            const url = "https://api.waifu.pics/sfw/cosplay";
            const res = await axios.get(url, { responseType: "arraybuffer" });
            fs.writeFileSync("./cosplay.jpg", res.data);
            await sock.sendMessage(from, { image: { url: "./cosplay.jpg" }, caption: "Cosplay 😏" }, { quoted: msg });
        } catch (err) {
            console.error(err);
            await sock.sendMessage(from, { text: "Error retrieving cosplay image." }, { quoted: msg });
        }
    }
};const axios = require("axios");

module.exports = {
    name: "couplepp",
    aliases: [],
    ownerOnly: false,
    async execute(sock, msg, args, { from }) {
        try {
            const res = await axios.get("https://some-random-api.ml/couple");
            await sock.sendMessage(from, { image: { url: res.data.male }, caption: "For him 💞" }, { quoted: msg });
            await sock.sendMessage(from, { image: { url: res.data.female }, caption: "For her 💞" }, { quoted: msg });
        } catch (err) {
            console.error(err);
            await sock.sendMessage(from, { text: "Error retrieving couple images." }, { quoted: msg });
        }
    }
};
