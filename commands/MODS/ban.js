module.exports = {
    name: 'ban',
    description: 'Ban a user and remove them from all groups where the bot is admin',
    category: 'MODS',
    async execute(sock, msg, args) {
        const from = msg.key.remoteJid;
        let target;

        if (msg.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0]) {
            target = msg.message.extendedTextMessage.contextInfo.mentionedJid[0];
        } else if (msg.message.extendedTextMessage?.contextInfo?.quotedMessage) {
            target = msg.message.extendedTextMessage.contextInfo.participant;
        } else if (args[0]) {
            target = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        }

        if (!target) return sock.sendMessage(from, { text: 'Please tag a user, reply to their message, or provide their number to ban.' });

        await sock.sendMessage(from, { text: `Banning @${target.split('@')[0]} and removing from all shared groups...`, mentions: [target] });

        try {
            const groups = await sock.groupFetchAllParticipating();
            const groupIds = Object.keys(groups);
            
            let removedCount = 0;
            for (const gid of groupIds) {
                const group = groups[gid];
                const botId = sock.user.id.split(':')[0] + '@s.whatsapp.net';
                const botParticipant = group.participants.find(p => p.id === botId);
                const isBotAdmin = botParticipant?.admin || botParticipant?.isSuperAdmin;
                const isTargetInGroup = group.participants.find(p => p.id === target);

                if (isBotAdmin && isTargetInGroup) {
                    await sock.groupParticipantsUpdate(gid, [target], 'remove');
                    removedCount++;
                }
            }

            await sock.sendMessage(from, { text: `Successfully banned @${target.split('@')[0]} and removed them from ${removedCount} groups.`, mentions: [target] });
        } catch (err) {
            console.error(err);
            await sock.sendMessage(from, { text: 'An error occurred while trying to remove the user from groups.' });
        }
    }
};
