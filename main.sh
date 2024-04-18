#!/bin/bash

# Grant execute permission to main.sh
chmod +x main.sh

# Install dependencies
npm install telegraf axios cheerio fs gradient-string pino util node-telegram-bot-api node-fetch

# Run the bot
bash start.sh
