# BLUEBOT-MD - Multi-Session WhatsApp Bot

**Author/Developer:** mudau_t

This is a powerful, multi-session WhatsApp bot built with Node.js and the Baileys library. It features a robust command handler structure, dynamic session management, and configuration via a `.env` file.

## ⚠️ Modification Prohibition

**The Software and its source code are provided "as is" and may not be modified, altered, or adapted in any way without the express written permission of the copyright holder, mudau_t.** Please refer to the `LICENSE` file for full details.

## Features

*   **Multi-Session Support:** Easily run multiple WhatsApp accounts by changing the `SESSION_ID` in the `.env` file. Session data is stored in the `sessions/` directory.
*   **Command Handler:** Simple and scalable command structure organized by user roles.
*   **Environment Configuration:** All sensitive and customizable settings are managed via a `.env` file.
*   **Role-Based Commands:** Commands are categorized into 7 distinct directories for clear permission management.

## Project Structure

The project is organized to be clean and easy to navigate:

```
BLUEBOT-MD/
├── commands/
│   ├── Admin/      # Commands for group administrators
│   ├── Dev/        # Commands for bot developers (cannot be changed)
│   ├── Fun/        # Fun and entertainment commands
│   ├── Group/      # General group management commands
│   ├── Admin/      # 50+ Group Admin commands
│   ├── Dev/        # 50+ Developer commands (Protected)
│   ├── Fun/        # 50+ Entertainment commands
│   ├── Group/      # 50+ Group Security (Antilink, Antibot, etc.)
│   ├── MODS/       # 50+ Moderator commands (including advanced .ban)
│   ├── Owner/      # 30+ Exclusive Owner commands
│   └── general/    # 70+ Public commands (replacing Users category)
├── sessions/       # Stores WhatsApp session data for multi-session support
├── index.js        # Main bot logic and command loader
├── .env.example    # Template for configuration
├── package.json    # Project dependencies and scripts
└── LICENSE         # License file with modification prohibition
```

## Installation and Setup

1.  **Clone the repository:**
    \`\`\`bash
    git clone https://github.com/Vhadau2011/BLUEBOT-MD.git
    cd BLUEBOT-MD
    \`\`\`

2.  **Install dependencies:**
    \`\`\`bash
    npm install
    \`\`\`

3.  **Configure the environment:**
    Create a file named `.env` in the root directory and copy the contents of `.env.example` into it.

    **`.env` Configuration:**
    | Variable | Description | Example |
    | :--- | :--- | :--- |
    | `OWNER_NUMBER` | Your WhatsApp number (with country code, no +) | `27123456789` |
    | `SESSION_ID` | Unique name for this session (e.g., `main-bot`) | `main-bot` |
    | `BOT_NAME` | The name of your bot | `BLUEBOT-MD` |
    | `OWNER_NAME` | The name of the bot owner | `mudau_t` |
    | `PREFIX` | The command prefix (e.g., `!`, `.`, `#`) | `!` |
    | `MODS` | Comma-separated list of moderator numbers (no +) | `27987654321,27111222333` |
| `MENU_IMAGE` | URL of the image to display on the menu | `https://example.com/image.jpg` |

4.  **Start the bot:**
    \`\`\`bash
    node index.js
    \`\`\`
    A QR code will appear in the terminal. Scan it with your WhatsApp mobile app to link the device.

## Command Handler Explained

The `index.js` file automatically loads all `.js` files from the subdirectories within the `commands/` folder.

### How to Add a New Command

1.  Choose the appropriate category (e.g., `Users`, `Fun`, `Owner`).
2.  Create a new file in that directory (e.g., `commands/Fun/dice.js`).
3.  Export an object with `name`, `description`, and an `execute` function:

    \`\`\`javascript
    // commands/Fun/dice.js
    module.exports = {
        name: 'dice',
        description: 'Rolls a six-sided die',
        async execute(sock, msg, args, context) {
            const result = Math.floor(Math.random() * 6) + 1;
            await sock.sendMessage(msg.key.remoteJid, { text: \`You rolled a \${result}!\` });
        }
    };
    \`\`\`

### Available Commands (Examples)

| Command | Category | Description |
| :--- | :--- | :--- |
| `!ping` | Users | Checks bot response time. |
| `!eval` | Owner | Executes arbitrary JavaScript code (Owner only). |
| `!update` | Dev | Pulls the latest version from the official repository and restarts the bot. **(Cannot be changed)** |
| `!kick` | Admin | Kicks a member from the group (Group only). |
| `!joke` | Fun | Gets a random joke. |
| `!tagall` | Group | Tags all members in a group. |
| `!warn` | MODS | Warns a user. |

## Multi-Session Mechanism

The bot uses the `useMultiFileAuthState` function from Baileys.

1.  The `SESSION_ID` variable from the `.env` file is used to create a unique folder inside the `sessions/` directory (e.g., `sessions/main-bot`).
2.  This folder stores all the necessary authentication files for that specific WhatsApp account.
3.  To run a second session, simply create a new `.env` file (or modify the existing one) with a different `SESSION_ID` (e.g., `SESSION_ID=second-bot`) and run a new instance of the bot. The new instance will create a new folder and require a new QR scan.
