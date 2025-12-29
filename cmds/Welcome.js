// Store recent welcomes to prevent duplicates
const recentWelcomes = new Map();

sock.ev.on('group-participants.update', async (update) => {
  const { id: groupId, action, participants } = update;

  if (action !== 'add') return;

  const welcomeMsgTemplate = welcomeMessages[groupId];
  if (!welcomeMsgTemplate) return;

  for (const participant of participants) {
    const key = `${groupId}-${participant}`;

    // If we already welcomed this participant in the last 5 seconds, skip
    if (recentWelcomes.has(key)) continue;
    recentWelcomes.set(key, Date.now());

    // Auto-clean old entries after 5 seconds
    setTimeout(() => recentWelcomes.delete(key), 5000);

    const tag = `@${participant.split('@')[0]}`;
    const finalMessage = welcomeMsgTemplate.replace('@mention', tag);

    await sock.sendMessage(groupId, {
      text: finalMessage,
      mentions: [participant]
    });
  }
});
