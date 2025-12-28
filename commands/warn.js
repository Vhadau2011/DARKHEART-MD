// warn.js
const { ajouterUtilisateurAvecWarnCount, getWarnCountByJID, resetWarnCountByJID } = require('../utils/warnUtils'); // adjust the path
const s = require('../set');

module.exports = {
    name: "warn",
    aliases: [],
    ownerOnly: false,
    async execute(sock, msg, args, { from, isSuperUser, isGroup, isAdmin, repliedMsg, repliedUser }) {
        if (!isGroup) {
            return sock.sendMessage(from, { text: "You don't have access to this command in private chat" }, { quoted: msg });
        }

        if (!isAdmin && !isSuperUser) {
            return sock.sendMessage(from, { text: "You need admin rights" }, { quoted: msg });
        }

        const target = repliedUser;
        if (!target) {
            return sock.sendMessage(from, { text: "You must reply to a user to warn them" }, { quoted: msg });
        }

        if (!args[0] || args[0] === "") {
            await ajouterUtilisateurAvecWarnCount(from, target);
            const count = await getWarnCountByJID(from, target);
            const maxWarn = s.maxWarn; // for example, get max warnings from set.js

            if (count >= maxWarn) {
                await sock.groupParticipantsUpdate(from, [target], "remove");
                return sock.sendMessage(from, { text: "This user has reached the maximum number of warnings and will be removed from the group" }, { quoted: msg });
            } else {
                const left = maxWarn - count;
                return sock.sendMessage(from, { text: `This user has received an additional warning; warnings left: ${left}` }, { quoted: msg });
            }
        }

        if (args[0].toLowerCase() === "reset") {
            await resetWarnCountByJID(from, target);
            return sock.sendMessage(from, { text: "The number of warnings has been reset for this user" }, { quoted: msg });
        }

        return sock.sendMessage(from, { text: "Invalid argument" }, { quoted: msg });
    }
}; 
