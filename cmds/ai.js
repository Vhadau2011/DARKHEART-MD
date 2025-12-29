/*
 * Copyright © 2025 Mudau Thendo (BLŪK1NG)
 * This file is part of BLUEBOT-MD.
 * All rights reserved. You may not modify or redistribute this file
 * without explicit permission from the author.
 * -------------------------------------------------------------------------------
 */

const { chatWithAi, getData, storeData, clearChatHistory, commands, prefix } = require("../core");

let chatc = getData("chatbot_cfg") || {
  active: false,
  global: false,
  activeChats: []
};

module.exports = [
  {
    caller: "openai",
    prop: "Chat with AI (OpenAI GPT-5 Nano)",
    react: "🤖",
    fromWho: false,
    type: "ai",
    execute: async (m, text) => {
      try {
        const prompt = text || m.quoted?.text;
        if (!prompt) return await m.send("Hi! What's your prompt?");
        return await m.send(await chatWithAi(prompt, "openai"));
      } catch (e) {
        console.error("cmd error", e);
        return await m.sendErr(e);
      }
    }
  },
  {
    caller: "gpt",
    prop: "Chat with AI (OpenAI Fast)",
    react: "⚡",
    fromWho: false,
    type: "ai",
    execute: async (m, text) => {
      try {
        const prompt = text || m.quoted?.text;
        if (!prompt) return await m.send("Hi! What's your prompt?");
        return await m.send(await chatWithAi(prompt, "openai-fast"));
      } catch (e) {
        console.error("cmd error", e);
        return await m.sendErr(e);
      }
    }
  },
  {
    caller: "gemini",
    prop: "Chat with AI (Gemini 2.5)",
    react: "🪐",
    fromWho: false,
    type: "ai",
    execute: async (m, text) => {
      try {
        const prompt = text || m.quoted?.text;
        if (!prompt) return await m.send("Hi! What's your prompt?");
        return await m.send(await chatWithAi(prompt, "gemini"));
      } catch (e) {
        console.error("cmd error", e);
        return await m.sendErr(e);
      }
    }
  },
  {
    caller: "aisearch",
    prop: "Chat with AI (Gemini with Google Search)",
    react: "🔍",
    fromWho: false,
    type: "ai",
    execute: async (m, text) => {
      try {
        const prompt = text || m.quoted?.text;
        if (!prompt) return await m.send("Hi! What's your prompt?");
        return await m.send(await chatWithAi(prompt, "gemini-search"));
      } catch (e) {
        console.error("cmd error", e);
        return await m.sendErr(e);
      }
    }
  },
  {
    caller: "chatbot",
    prop: "Activate chatbot in chat",
    react: "💬",
    fromWho: true,
    type: "ai",
    execute: async (m, text, cmd) => {
      try {
        if (!text) return m.btnText("Toggle chatbot", {
          [`${cmd} on`]: "✅ON",
          [`${cmd} off`]: "OFF",
          [`${cmd} on all`]: "On (All chats)",
          [`${cmd} off all`]: "Off (All chats)",
          [`${cmd} status`]: "📊 Status",
          [`${cmd} clear`]: "🗑️ Clear History"
        });

        const args = text.split(" ");
        const option = args[0]?.toLowerCase();
        const value = args[1] || null;

        switch (option) {
          case "on":
            if (value === "all") chatc.global = true;
            else {
              chatc.active = true;
              if (!chatc.activeChats.includes(m.chat)) chatc.activeChats.push(m.chat);
            }
            await storeData("chatbot_cfg", JSON.stringify(chatc, null, 2));
            return await m.send("_Chatbot activated!_");
          case "off":
            if (value === "all") chatc.global = false;
            else chatc.activeChats = chatc.activeChats.filter(jid => jid !== m.chat);
            clearChatHistory(m.chat);
            await storeData("chatbot_cfg", JSON.stringify(chatc, null, 2));
            return await m.send("_Chatbot deactivated!_");
          case "status":
            return await m.send(`*Chatbot Status:*\nActive: ${chatc.active}\nGlobal: ${chatc.global}`);
          case "clear":
            clearChatHistory(m.chat);
            return await m.send("_Chat history cleared_");
          default:
            return m.btnText("Toggle chatbot", {
              [`${cmd} on`]: "✅ON",
              [`${cmd} off`]: "OFF",
              [`${cmd} on all`]: "On (All chats)",
              [`${cmd} off all`]: "Off (All chats)",
              [`${cmd} status`]: "📊 Status",
              [`${cmd} clear`]: "🗑️ Clear History"
            });
        }
      } catch (e) {
        console.error("cmd error", e);
        return await m.sendErr(e);
      }
    }
  }
];        return await m.send(await chatWithAi(prompt, "gemini-search"));
      } catch (e) {
        console.error("cmd error", e);
        return await m.sendErr(e);
      }
    }
  },
  {
    caller: "chatbot",
    prop: "Activate chatbot in chat",
    react: "💬",
    fromWho: true,
    type: "ai",
    execute: async (m, text, cmd) => {
      try {
        if (!text) return m.btnText("Toggle chatbot", {
          [`${caller} on`]: "✅ON",
          [`${caller} off`]: "OFF",
          [`${caller} on all`]: "On (All chats)",
          [`${caller} off all`]: "Off (All chats)",
          [`${caller} status`]: "📊 Status",
          [`${caller} clear`]: "🗑️ Clear History"
        });

        const args = text.split(" ");
        const option = args[0]?.toLowerCase();
        const value = args[1] || null;

        switch (option) {
          case "on":
            if (value === "all") {
              chatc.global = true;
            } else {
              chatc.active = true;
              if (!chatc.activeChats.includes(m.chat)) chatc.activeChats.push(m.chat);
            }
            await storeData("chatbot_cfg", JSON.stringify(chatc, null, 2));
            return await m.send("_Chatbot activated!_");
          case "off":
            if (value === "all") chatc.global = false;
            else chatc.activeChats = chatc.activeChats.filter(jid => jid !== m.chat);
            clearChatHistory(m.chat);
            await storeData("chatbot_cfg", JSON.stringify(chatc, null, 2));
            return await m.send("_Chatbot deactivated!_");
          case "status":
            return await m.send(`*Chatbot Status:*\nActive: ${chatc.active}\nGlobal: ${chatc.global}`);
          case "clear":
            clearChatHistory(m.chat);
            return await m.send("_Chat history cleared_");
          default:
            return m.btnText("Toggle chatbot", {
              [`${caller} on`]: "✅ON",
              [`${caller} off`]: "OFF",
              [`${caller} on all`]: "On (All chats)",
              [`${caller off all`]: "Off (All chats)",
              [`${caller} status`]: "📊 Status",
              [`${caller} clear`]: "🗑️ Clear History"
            });
        }
      } catch (e) {
        console.error("cmd error", e);
        return await m.sendErr(e);
      }
    }
  }
];
