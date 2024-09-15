const { Command } = require('commander');
const { execSync } = require('child_process');
const path = require('path');


// Function to run shell commands using child_process
export const runCommand = (command: string, cwd = process.cwd()) => {
  try {
    execSync(command, { stdio: 'inherit', cwd });
  } catch (error) {
    console.error(`Error executing command: ${command}`);
    console.error(error);
    process.exit(1); // Exit the process with an error code
  }
};