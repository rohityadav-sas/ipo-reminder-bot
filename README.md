# 📢 **IPO Reminder Bot**

A lightweight Telegram bot that automatically posts new IPO (Initial Public Offering) updates to a Telegram channel. Built using Node.js and TypeScript, leveraging Telegram's official API without any heavy dependencies.

## 📌 **Table of Contents**

- [Preview](#preview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Dependencies](#dependencies)
- [License](#license)
- [Contributing](#contributing)

## 📸 **Preview**

<div align="center">
  <img src="./assets/preview.jpg?raw=true" height="700"/>
</div>

## 🚀 **Features**

- **Fetches IPO Updates** from `MeroShare API`.
- **Posts IPOs** to a Telegram channel.
- **Runs Automatically** at:
  ```
  ⏰ 10 AM, 11 AM, 12 PM, 1 PM, 2 PM, 3 PM, 4 PM, 5 PM (Nepal Time)
  ```
- **Logs Errors & Activity** in `logs/bot.log`.
- **Reports Errors** to the admin (your Telegram account).
- **Uses Only Telegram's Official API** (No heavy npm libraries).

## ⚙ **Prerequisites**

- **Node.js** (v12 or higher)
- **npm** (v6 or higher)
- **Telegram account, channel and bot token**

## 🔧 **Installation**

### 1️⃣ Clone the repository

```sh
git clone https://github.com/rohityadav-sas/ipo-reminder-bot.git

cd ipo-reminder-bot
```

### 2️⃣ Install dependencies

```sh
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file in the root directory and add the following environment variables

```sh
USER=your_meroshare_username

PASSWORD=your_meroshare_password

CLIENT_ID=your_meroshare_client_id

BOT_TOKEN=your_telegram_bot_token

CHANNEL_ID=your_telegram_channel_id

ADMIN=your_telegram_account_id
```

### 4️⃣ Run the bot

```sh
npm start
```

## 🔍 **How It Works**

- **Authentication**: The bot logs in using MeroShare API credentials.

- **Fetch IPOs**: It retrieves IPOs from the API and compares them with stored data.

- **Check for New IPOs**: If new IPOs are found, they are saved and posted to Telegram.

- **Post to Telegram**: IPOs are sent to the Telegram channel using the official API.

- **Error Logging & Reporting**: Any errors are logged in `logs/bot.log` and sent to the admin.

## Dependencies

- **[axios](https://www.npmjs.com/package/axios)** - Promise based HTTP client for the browser and node.js

- **[puppeteer](https://www.npmjs.com/package/puppeteer)** - Headless Chrome Node.js API

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
