const { exec } = require('child_process');

// Grant execute permission to main.js
exec('chmod +x main.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing chmod: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

// Install dependencies
exec('npm install telegraf axios cheerio fs gradient-string pino util node-telegram-bot-api node-fetch', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error installing dependencies: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

// Run the bot
exec('bash start.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing start.js: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
