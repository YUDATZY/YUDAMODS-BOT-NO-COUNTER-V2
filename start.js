const { exec } = require('child_process');

// Grant execute permission to start.js
exec('chmod +x start.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing chmod: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

// Run the bot
exec('node yudamods-main.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing yudamods-main.js: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
